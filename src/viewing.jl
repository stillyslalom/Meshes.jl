# ------------------------------------------------------------------
# Licensed under the MIT License. See LICENSE in the project root.
# ------------------------------------------------------------------

# -------------------
# VIEWS WITH INDICES
# -------------------

Base.view(domain::Domain, inds) = DomainView(domain, inds)
Base.view(data::Data, inds, vars) = DataView(data, inds, vars)

function Base.view(data::Data, inds)
  vars = collect(Tables.schema(values(data)).names)
  DataView(data, inds, vars)
end
function Base.view(data::Data, vars::AbstractVector{Symbol})
  inds = 1:nelements(domain(data))
  DataView(data, inds, vars)
end

# specialize view to avoid infinite loops
Base.view(v::DataView, inds, vars) =
  DataView(v.data, v.inds[inds], vars)
Base.view(v::DataView, inds::AbstractVector{Int}) =
  DataView(v.data, v.inds[inds], v.vars)
Base.view(v::DataView, vars::AbstractVector{Symbol}) =
  DataView(v.data, v.inds, vars)

# ----------------------
# VIEWS WITH GEOMETRIES
# ----------------------

"""
    view(domain, geometry)

Return a view of the `domain` containing all elements that
are inside the `geometry`.
"""
Base.view(domain::Domain, geometry::Geometry) =
  view(domain, viewindices(domain, geometry))

function Base.view(data::Data, geometry::Geometry)
  dom = domain(data)
  tab = values(data)

  # retrieve subdomain
  inds   = viewindices(dom, geometry)
  subdom = view(dom, inds)

  # retrieve subtable
  tinds  = _linear(dom, inds)
  tvars  = Tables.schema(tab).names
  subtab = viewtable(tab, tinds, tvars)

  # constructor for data type
  ctor = constructor(typeof(data))

  ctor(subdom, subtab)
end

# convert from Cartesian to linear indices if needed
@traitfn _linear(domain::D, inds) where {D; IsGrid{D}} =
  vec(LinearIndices(size(domain))[inds])
@traitfn _linear(::D, inds) where {D; !IsGrid{D}} = inds

"""
    viewindices(domain, geometry)

Return the indices of the `domain` that are inside the `geometry`.
"""
@traitfn function viewindices(domain::D, geometry::Geometry) where {D; !IsGrid{D}}
  pred(i) = _isinside(domain[i], geometry)
  filter(pred, 1:nelements(domain))
end

_isinside(p::Point, geometry) = p ∈ geometry
_isinside(g::Geometry, geometry) = g ⊆ geometry

@traitfn function viewindices(domain::D, box::Box) where {D; IsGrid{D}}
  # grid properties
  or = coordinates(minimum(domain))
  sp = spacing(domain)
  sz = size(domain)

  # intersection of boxes
  □ = boundingbox(domain) ∩ box
  lo, up = coordinates.(extrema(□))

  # Cartesian indices of new corners
  ilo = @. max(ceil(Int,  (lo - or) / sp) + 1,  1)
  iup = @. min(floor(Int, (up - or) / sp)    , sz)

  CartesianIndex(Tuple(ilo)):CartesianIndex(Tuple(iup))
end

# ----------
# UTILITIES
# ----------

"""
    slice(object, xmin:xmax, ymin:ymax, ...)

Slice the `object` using real coordinate ranges `xmin:xmax`, `ymin:ymax`, ...

### Notes

This function is equivalent to `view(object, Box(first.(ranges), last.(ranges))`.

In Julia the range `0.5:10.0` is materialized as `[0.5, ..., 9.5]` so it won't
necessarily include the right value. This behavior is different than the more
intuitive behavior of `view(object, Box((0.5,0.5), (10.0,10.0))`.
"""
slice(object, ranges...) = view(object, Box(first.(ranges), last.(ranges)))
