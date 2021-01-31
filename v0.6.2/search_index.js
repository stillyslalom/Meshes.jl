var documenterSearchIndex = {"docs":
[{"location":"geometries/polytopes.html#Polytopes","page":"Polytopes","title":"Polytopes","text":"","category":"section"},{"location":"geometries/polytopes.html","page":"Polytopes","title":"Polytopes","text":"Polytope\nSegment\nTriangle\nQuadrangle\nChain\nPolyArea\nPyramid\nTetrahedron\nHexahedron","category":"page"},{"location":"geometries/polytopes.html#Meshes.Polytope","page":"Polytopes","title":"Meshes.Polytope","text":"Polytope{N,Dim,T}\n\nWe say that a geometry is a N-polytope when it is a collection of \"flat\" sides that constitue a N-dimensional subspace. They are called polygon and polyhedron respectively for 2D (N=2) and 3D (N=3) subspaces, embedded in a Dim-dimensional space. The parameter N is also known as the rank or parametric dimension of the polytope: https://en.wikipedia.org/wiki/Abstract_polytope.\n\nThe term polytope expresses a particular combinatorial structure. A polyhedron, for example, can be decomposed into faces. Each face can then be decomposed into edges, and edges into vertices. Some conventions act as a mapping between vertices and higher dimensional features (edges, faces, cells...), removing the need to store all features. We follow the ordering conventions of the GMSH project: https://gmsh.info/doc/texinfo/gmsh.html#Node-ordering\n\nAdditionally, the following property must hold in order for a geometry to be considered a polytope: the boundary of a (N+1)-polytope is a collection of N-polytopes, which may have (N-1)-polytopes in common. See https://en.wikipedia.org/wiki/Polytope.\n\n\n\n\n\n","category":"type"},{"location":"geometries/polytopes.html#Meshes.Segment","page":"Polytopes","title":"Meshes.Segment","text":"Segment(p1, p2)\n\nA line segment with points p1, p2.\n\n\n\n\n\n","category":"type"},{"location":"geometries/polytopes.html#Meshes.Triangle","page":"Polytopes","title":"Meshes.Triangle","text":"Triangle(p1, p2, p3)\n\nA triangle with points p1, p2, p3.\n\n\n\n\n\n","category":"type"},{"location":"geometries/polytopes.html#Meshes.Quadrangle","page":"Polytopes","title":"Meshes.Quadrangle","text":"Quadrangle(p1, p2, p3, p4)\n\nA quadrangle with points p1, p2, p3, p4.\n\n\n\n\n\n","category":"type"},{"location":"geometries/polytopes.html#Meshes.Chain","page":"Polytopes","title":"Meshes.Chain","text":"Chain(p1, p2, ..., pn)\n\nA polygonal chain from a sequence of points p1, p2, ..., pn. See https://en.wikipedia.org/wiki/Polygonal_chain.\n\n\n\n\n\n","category":"type"},{"location":"geometries/polytopes.html#Meshes.PolyArea","page":"Polytopes","title":"Meshes.PolyArea","text":"PolyArea(outer, [inner1, inner2, ..., innerk])\n\nA polygonal area with outer chain, and optional inner chains inner1, inner2, ..., innerk.\n\nChains can be a vector of Point or a vector of tuples with coordinates for convenience.\n\nMost algorithms assume that the outer chain is oriented counter-clockwise (CCW) and that all inner chains are oriented clockwise (CW).\n\n\n\n\n\n","category":"type"},{"location":"geometries/polytopes.html#Meshes.Pyramid","page":"Polytopes","title":"Meshes.Pyramid","text":"Pyramid(p1, p2, p3, p4, p5)\n\nA pyramid with points p1, p2, p3, p4, p5.\n\n\n\n\n\n","category":"type"},{"location":"geometries/polytopes.html#Meshes.Tetrahedron","page":"Polytopes","title":"Meshes.Tetrahedron","text":"Tetrahedron(p1, p2, p3, p4)\n\nA tetrahedron with points p1, p2, p3, p4.\n\n\n\n\n\n","category":"type"},{"location":"geometries/polytopes.html#Meshes.Hexahedron","page":"Polytopes","title":"Meshes.Hexahedron","text":"Hexahedron(p1, p2, ..., p8)\n\nA hexahedron with points p1, p2, ..., p8.\n\n\n\n\n\n","category":"type"},{"location":"links.html#Index","page":"Index","title":"Index","text":"","category":"section"},{"location":"links.html","page":"Index","title":"Index","text":"Below is the list of types and functions mentioned in the documentation.","category":"page"},{"location":"links.html#Types","page":"Index","title":"Types","text":"","category":"section"},{"location":"links.html","page":"Index","title":"Index","text":"Order = [:type]","category":"page"},{"location":"links.html#Functions","page":"Index","title":"Functions","text":"","category":"section"},{"location":"links.html","page":"Index","title":"Index","text":"Order = [:function]","category":"page"},{"location":"points.html#Points","page":"Points","title":"Points","text":"","category":"section"},{"location":"points.html","page":"Points","title":"Points","text":"Point\nembeddim(::Point)\ncoordtype(::Point)\ncoordinates(::Point)\n-(::Point, ::Point)\n+(::Point, ::Vec)\n-(::Point, ::Vec)\nisapprox(::Point, ::Point)","category":"page"},{"location":"points.html#Meshes.Point","page":"Points","title":"Meshes.Point","text":"Point{Dim,T}\n\nA point in Dim-dimensional space with coordinates of type T. The coordinates of the point provided upon construction are with respect to the canonical Euclidean basis.\n\nExample\n\nO = Point(0.0, 0.0) # origin of 2D Euclidean space\n\nNotes\n\nType aliases are Point2, Point3, Point2f, Point3f\n\n\n\n\n\n","category":"type"},{"location":"points.html#Meshes.embeddim-Tuple{Point}","page":"Points","title":"Meshes.embeddim","text":"embeddim(point)\n\nReturn the number of dimensions of the space where the point is embedded.\n\n\n\n\n\nembeddim(geometry)\n\nReturn the number of dimensions of the space where the geometry is embedded.\n\n\n\n\n\n","category":"method"},{"location":"points.html#Meshes.coordtype-Tuple{Point}","page":"Points","title":"Meshes.coordtype","text":"coordtype(point)\n\nReturn the machine type of each coordinate used to describe the point.\n\n\n\n\n\ncoordtype(geometry)\n\nReturn the machine type of each coordinate used to describe the geometry.\n\n\n\n\n\n","category":"method"},{"location":"points.html#Meshes.coordinates-Tuple{Point}","page":"Points","title":"Meshes.coordinates","text":"coordinates(A::Point)\n\nReturn the coordinates of the point with respect to the canonical Euclidean basis.\n\n\n\n\n\n","category":"method"},{"location":"points.html#Base.:--Tuple{Point,Point}","page":"Points","title":"Base.:-","text":"-(A::Point, B::Point)\n\nReturn the Vec associated with the direction from point A to point B.\n\n\n\n\n\n","category":"method"},{"location":"points.html#Base.:+-Tuple{Point,StaticArrays.SArray{Tuple{S},T,1,S} where T where S}","page":"Points","title":"Base.:+","text":"+(A::Point, v::Vec)\n+(v::Vec, A::Point)\n\nReturn the point at the end of the vector v placed at a reference (or start) point A.\n\n\n\n\n\n","category":"method"},{"location":"points.html#Base.:--Tuple{Point,StaticArrays.SArray{Tuple{S},T,1,S} where T where S}","page":"Points","title":"Base.:-","text":"-(A::Point, v::Vec)\n-(v::Vec, A::Point)\n\nReturn the point at the end of the vector -v placed at a reference (or start) point A.\n\n\n\n\n\n","category":"method"},{"location":"points.html#Base.isapprox-Tuple{Point,Point}","page":"Points","title":"Base.isapprox","text":"isapprox(A::Point, B::Point)\n\nTells whether or not the coordinates of points A and B are approximately equal.\n\n\n\n\n\n","category":"method"},{"location":"algorithms/boundbox.html#Bounding-box","page":"Bounding box","title":"Bounding box","text":"","category":"section"},{"location":"algorithms/boundbox.html","page":"Bounding box","title":"Bounding box","text":"boundingbox","category":"page"},{"location":"algorithms/boundbox.html#Meshes.boundingbox","page":"Bounding box","title":"Meshes.boundingbox","text":"boundingbox(geometry)\n\nAxis-aligned bounding box of the geometry.\n\n\n\n\n\n","category":"function"},{"location":"about/license.html","page":"License","title":"License","text":"The Meshes.jl project is licensed under the MIT license:","category":"page"},{"location":"about/license.html","page":"License","title":"License","text":"Copyright (c) 2019-2020 Júlio Hoffimann, Simon Danisch, Arsh Sharma, Anshul Singhvi,\nMartijn Visser, Daniel Schwabeneder, F Freyer, Steve Kelly, Tim Holy, Matija Čufar,\nBenoît Legat, Erik Schenetter, Jan Weidner, Mohamed Tarek, Paul Jurczak,\nZachary P. Christensen, Andrew Bylard, Yuval\n\nLicensed under the MIT license.\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.","category":"page"},{"location":"meshes.html#Meshes","page":"Meshes","title":"Meshes","text":"","category":"section"},{"location":"meshes.html#Types","page":"Meshes","title":"Types","text":"","category":"section"},{"location":"meshes.html","page":"Meshes","title":"Meshes","text":"CartesianGrid\nUnstructuredMesh","category":"page"},{"location":"meshes.html#Meshes.CartesianGrid","page":"Meshes","title":"Meshes.CartesianGrid","text":"CartesianGrid(dims, origin, spacing)\n\nA Cartesian grid with dimensions dims, lower left corner at origin and cell spacing spacing. The three arguments must have the same length.\n\nCartesianGrid(start, finish, dims=dims)\n\nAlternatively, construct a Cartesian grid from a start point (lower left) to a finish point (upper right).\n\nCartesianGrid{T}(dims)\nCartesianGrid{T}(dim1, dim2, ...)\n\nFinally, a Cartesian grid can be constructed by only passing the dimensions dims as a tuple, or by passing each dimension dim1, dim2, ... separately. In this case, the origin and spacing default to (0,0,...) and (1,1,...).\n\nExamples\n\nCreate a 3D grid with 100x100x50 locations:\n\njulia> CartesianGrid(100,100,50)\n\nCreate a 2D grid with 100x100 locations and origin at (10.,20.) units:\n\njulia> CartesianGrid((100,100),(10.,20.),(1.,1.))\n\nCreate a 1D grid from -1 to 1 with 100 locations:\n\njulia> CartesianGrid((-1.,),(1.,), dims=(100,))\n\n\n\n\n\n","category":"type"},{"location":"meshes.html#Meshes.UnstructuredMesh","page":"Meshes","title":"Meshes.UnstructuredMesh","text":"UnstructuredMesh(points, connec)\n\nAn unstructured mesh with points and connectivities connec. The i-th element of the mesh is lazily built based on the connectivity list connec[i].\n\n\n\n\n\n","category":"type"},{"location":"meshes.html#Connectivities","page":"Meshes","title":"Connectivities","text":"","category":"section"},{"location":"meshes.html","page":"Meshes","title":"Meshes","text":"Connectivity\npolytopetype\nconnect\nmaterialize","category":"page"},{"location":"meshes.html#Meshes.Connectivity","page":"Meshes","title":"Meshes.Connectivity","text":"Connectivity{PL,N}\n\nA connectivity list of N indices representing a Polytope of type PL. Indices are taken from a global vector of Point.\n\nConnectivity objects are constructed with the connect function.\n\n\n\n\n\n","category":"type"},{"location":"meshes.html#Meshes.polytopetype","page":"Meshes","title":"Meshes.polytopetype","text":"polytopetype(connectivity)\n\nReturn the face type (e.g. Triangle) of the connectivity.\n\n\n\n\n\n","category":"function"},{"location":"meshes.html#Meshes.connect","page":"Meshes","title":"Meshes.connect","text":"connect(list, PL)\n\nConnect a list of indices from a global vector of Point into a Polytope of type PL.\n\nExample\n\nΔ = connect((1,2,3), Triangle)\n\n\n\n\n\n","category":"function"},{"location":"meshes.html#Meshes.materialize","page":"Meshes","title":"Meshes.materialize","text":"materialize(connec, points)\n\nMaterialize a face using the connec list and a global vector of points.\n\n\n\n\n\n","category":"function"},{"location":"meshes.html#Conventions","page":"Meshes","title":"Conventions","text":"","category":"section"},{"location":"meshes.html","page":"Meshes","title":"Meshes","text":"GMSH","category":"page"},{"location":"meshes.html#Meshes.GMSH","page":"Meshes","title":"Meshes.GMSH","text":"Ordering convention of the GMSH project: https://gmsh.info/doc/texinfo/gmsh.html#Node-ordering\n\n\n\n\n\n","category":"type"},{"location":"algorithms/discretization.html#Discretization","page":"Discretization","title":"Discretization","text":"","category":"section"},{"location":"algorithms/discretization.html","page":"Discretization","title":"Discretization","text":"discretize\nDiscretizationMethod\nFIST","category":"page"},{"location":"algorithms/discretization.html#Meshes.discretize","page":"Discretization","title":"Meshes.discretize","text":"discretize(geometry, method)\n\nDiscretize geometry with discretization method.\n\n\n\n\n\n","category":"function"},{"location":"algorithms/discretization.html#Meshes.DiscretizationMethod","page":"Discretization","title":"Meshes.DiscretizationMethod","text":"DiscretizationMethod\n\nA method for discretizing geometries into meshes.\n\n\n\n\n\n","category":"type"},{"location":"algorithms/discretization.html#Meshes.FIST","page":"Discretization","title":"Meshes.FIST","text":"FIST\n\nFast Industrial-Strength Triangulation (FIST) of polygons.\n\nThis triangulation method is the method behind the famous Mapbox's Earcut library. It is based on a ear clipping algorithm adapted for complex n-gons with holes. It has O(n²) time complexity where n is the number of vertices. In practice it is very efficient due to heuristics implemented in the algorithm.\n\nReferences\n\nHeld, M. 1998. FIST: Fast Industrial-Strength Triangulation of Polygons\nEder et al. 2018. Parallelized ear clipping for the triangulation and constrained Delaunay triangulation of polygons\n\n\n\n\n\n","category":"type"},{"location":"contributing/guidelines.html#Guidelines","page":"Guidelines","title":"Guidelines","text":"","category":"section"},{"location":"contributing/guidelines.html","page":"Guidelines","title":"Guidelines","text":"First off, thank you for considering contributing to Meshes.jl. Below are a few suggestions to speed up the collaboration process:","category":"page"},{"location":"contributing/guidelines.html","page":"Guidelines","title":"Guidelines","text":"Please be polite, we are here to help and learn from each other.\nTry to explain your contribution with simple language.\nReferences to textbooks and papers are always welcome.\nFollow the coding standards in the source.","category":"page"},{"location":"contributing/guidelines.html#Reporting-issues","page":"Guidelines","title":"Reporting issues","text":"","category":"section"},{"location":"contributing/guidelines.html","page":"Guidelines","title":"Guidelines","text":"If you are experiencing issues or have discovered a bug, please report it on GitHub. To make the resolution process easier, please include the version of Julia and Meshes.jl in your writeup. These can be found with two commands:","category":"page"},{"location":"contributing/guidelines.html","page":"Guidelines","title":"Guidelines","text":"julia> versioninfo()\njulia> using Pkg; Pkg.status()","category":"page"},{"location":"contributing/guidelines.html#Feature-requests","page":"Guidelines","title":"Feature requests","text":"","category":"section"},{"location":"contributing/guidelines.html","page":"Guidelines","title":"Guidelines","text":"If you have suggestions of improvement or algorithms that you would like to see implemented in Meshes.jl, please open an issue on GitHub. Suggestions as well as feature requests are very welcome.","category":"page"},{"location":"contributing/guidelines.html#Code-contribution","page":"Guidelines","title":"Code contribution","text":"","category":"section"},{"location":"contributing/guidelines.html","page":"Guidelines","title":"Guidelines","text":"If you have code that you would like to contribute to GeoStats.jl, that is awesome! Please open an issue before you create the pull request on GitHub so that we make sure your idea is aligned with our goals for the project.","category":"page"},{"location":"contributing/guidelines.html","page":"Guidelines","title":"Guidelines","text":"After your idea is discussed and revised by maintainers, please get the development version of the project by typing the following in the package manager:","category":"page"},{"location":"contributing/guidelines.html","page":"Guidelines","title":"Guidelines","text":"] activate @dev","category":"page"},{"location":"contributing/guidelines.html","page":"Guidelines","title":"Guidelines","text":"This will create a fresh environment called @dev where you can play with the project components without compromising your normal user environment.","category":"page"},{"location":"contributing/guidelines.html","page":"Guidelines","title":"Guidelines","text":"] dev Meshes","category":"page"},{"location":"contributing/guidelines.html","page":"Guidelines","title":"Guidelines","text":"This will clone all the project components in your ~/.julia folder so that you can modify it and submit a pull request on GitHub later. Don't hesitate to ask questions. We are looking forward to your contributions.","category":"page"},{"location":"geometries/primitives.html#Primitives","page":"Primitives","title":"Primitives","text":"","category":"section"},{"location":"geometries/primitives.html","page":"Primitives","title":"Primitives","text":"Primitive\nBox\nCylinder\nBall\nSphere","category":"page"},{"location":"geometries/primitives.html#Meshes.Primitive","page":"Primitives","title":"Meshes.Primitive","text":"Primitive{Dim,T}\n\nWe say that a geometry is a primitive when it can be expressed as a single entity with no parts (a.k.a. atomic). For example, a sphere is a primitive described in terms of a mathematical expression involving a metric and a radius. See https://en.wikipedia.org/wiki/Geometric_primitive.\n\n\n\n\n\n","category":"type"},{"location":"geometries/primitives.html#Meshes.Box","page":"Primitives","title":"Meshes.Box","text":"Box(min, max)\n\nAn axis-aligned box with min and max corners. See https://en.wikipedia.org/wiki/Hyperrectangle.\n\nExample\n\nBox(Point(0,0,0), Point(1,1,1)) # unit cube\n\n\n\n\n\n","category":"type"},{"location":"geometries/primitives.html#Meshes.Cylinder","page":"Primitives","title":"Meshes.Cylinder","text":"Cylinder(start, finish, radius)\n\nA right circular cylinder with start and finish points, and radius of revolution. See https://en.wikipedia.org/wiki/Cylinder. \n\n\n\n\n\n","category":"type"},{"location":"geometries/primitives.html#Meshes.Ball","page":"Primitives","title":"Meshes.Ball","text":"Ball(center, radius)\n\nA Ball with center and radius.\n\n\n\n\n\n","category":"type"},{"location":"geometries/primitives.html#Meshes.Sphere","page":"Primitives","title":"Meshes.Sphere","text":"Sphere(center, radius)\n\nA sphere with center and radius.\n\n\n\n\n\n","category":"type"},{"location":"vectors.html#Vectors","page":"Vectors","title":"Vectors","text":"","category":"section"},{"location":"vectors.html","page":"Vectors","title":"Vectors","text":"Vec","category":"page"},{"location":"vectors.html#Meshes.Vec","page":"Vectors","title":"Meshes.Vec","text":"Vec{Dim,T}\n\nA vector in Dim-dimensional space with coordinates of type T representing a direction with magnitude. A vector can be obtained by subtracting two Point objects:\n\nExample\n\nA = Point(0.0, 0.0)\nB = Point(1.0, 0.0)\nv = B - A\n\nNotes\n\nA Vec is a SVector from StaticArrays.jl\nType aliases are Vec2, Vec3, Vec2f, Vec3f\n\n\n\n\n\n","category":"type"},{"location":"angles.html#Angles","page":"Angles","title":"Angles","text":"","category":"section"},{"location":"angles.html","page":"Angles","title":"Angles","text":"∠","category":"page"},{"location":"angles.html#Meshes.∠","page":"Angles","title":"Meshes.∠","text":"∠(A, B, C)\n\nAngle ∠ABC between rays BA and BC. See https://en.wikipedia.org/wiki/Angle.\n\nUses the two-argument form of atan. See https://en.wikipedia.org/wiki/Atan2.\n\nExample\n\n∠(Point(1,0), Point(0,0), Point(0,1)) == π/2\n\n\n\n\n\n","category":"function"},{"location":"index.html#Meshes.jl","page":"Home","title":"Meshes.jl","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Computational geometry and meshing algorithms in Julia.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"(Image: Build Status) (Image: Coverage Status) (Image: Stable Documentation) (Image: Latest Documentation) (Image: License File)","category":"page"},{"location":"index.html#Overview","page":"Home","title":"Overview","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Meshes.jl provides efficient implementations of concepts from computational geometry and finite element analysis. It promotes rigorous mathematical definitions of spatial discretizations (a.k.a. meshes) that are adequate for describing general manifolds embedded in R^n, including surfaces described with spherical coordinates, and geometries described with multiple coordinate reference systems. Our ambitious goal is to provide all the features of the CGAL project in pure Julia.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Unlike other existing efforts in the Julia ecosystem, this project is being carefully designed to facilitate the use of meshes across different scientific domains. We follow a strict set of good software engineering practices, and are quite pedantic in our test suite to make sure that all our implementations are free of bugs in both single and double floating point precision. Additionally, we guarantee type stability.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"The design of this project was motivated by various issues encountered with past attempts to represent geometry, which have been originally designed for visualization purposes (e.g. GeometryTypes.jl, GeometryBasics.jl) or specifically for finite element analysis (e.g. JuAFEM.jl, MeshCore.jl). We hope to provide a smoother experience with mesh representations that are adequate for finite finite element analysis, advanced geospatial modeling and visualization, not just one domain.","category":"page"},{"location":"index.html#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Get the latest stable release with Julia's package manager:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"] add Meshes","category":"page"},{"location":"index.html#Quick-example","page":"Home","title":"Quick example","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Although we didn't have time to document the functionality of the package properly, we still would like to illustrate some important features. For more information on available functionality, please consult the Reference guide and the suite of tests in the package.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"using Meshes","category":"page"},{"location":"index.html#Points-and-vectors","page":"Home","title":"Points and vectors","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"A Point is defined by its coordinates in a global reference system. The type of the coordinates is determined automatically based on the specified literals, or is forced to a specific type using helper constructors (e.g. Point2, Point3, Point2f, Point3f).","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"A vector Vec follows the same pattern. It can be constructed with the generic Vec constructor or with the variants Vec2 and Vec3 for double precision and Vec2f and Vec3f for single precision.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"A = Point(0, 0) # point with integer coordinates\nB = Point(1, 0) # another point in 2D space\nC = Point(0.0, 1.0) # double precision\nD = Point2(0, 1) # double precision from Int literal\nE = Point(1, 2, 3) # a point in 3D space\nF = Point3(1, 2, 3) # another point now with double precision\nG = Point(1f0, 2f0, 3f0) # single precision\nH = Point3f(1, 2, 3) # single precision from Int literal\n\nfor P in (A,B,C,D,E,F,G,H)\n  println(\"Coordinate type: \", coordtype(P))\n  println(\"Embedding dimension: \", embeddim(P))\nend","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Points can be subtracted to produce a vector:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"B - A","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"They can't be added, but their coordinates can:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"coordinates(G) + coordinates(H)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"We can add a point to a vector though, and get a new point:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"G + Vec3f(1,1,1)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"And finally, we can create points at random with:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"ps = rand(Point2, 10)","category":"page"},{"location":"index.html#Primitives","page":"Home","title":"Primitives","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Primitive geometries such as Box, Ball, Sphere, Cylinder are those geometries that can be efficiently represented in a computer without discretization. We can construct such geometries using clean syntax:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"b = Box((0,0), (1,1))","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"s = Sphere((0,0), 1)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"The parameters of these primitive geometries can be queried easily:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"extrema(b)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"center(s), radius(s)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"As well as their measure (e.g. area, volume) and other geometric properties:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"measure(b) == 1","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"We can sample random points on primitives using different methods:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"vs = sample(s, RegularSampling(10,10)) # 10 x 10 points over the sphere","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"And collect the generator with:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"collect(vs)","category":"page"},{"location":"index.html#Polytopes","page":"Home","title":"Polytopes","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Polytopes are geometries with \"flat\" sides. They generalize polygons and polyhedra. Most commonly used polytopes are already defined in the project, including Triangle, Pyramid, Quadrangle, Segment, Tetrahedron, and Hexahedron. Their vertices follow the GMSH ordering convention by default, but this is also customizable.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"t = Triangle((0,0), (1,0), (0,1))","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Some of these geometries have additional functionality like the measure (or area):","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"measure(t) == area(t) == 1/2","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Or the ability to know whether or not a point is inside:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"p = Point(0.5, 0.0)\n\np ∈ t","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"For line segments, for example, we have robust intersection algorithms:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"s1 = Segment((0.0,0.0), (1.0,0.0))\ns2 = Segment((0.5,0.0), (2.0,0.0))\n\ns1 ∩ s2","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Polytopes are widely used in GIS software under names such as \"LineString\" and \"Polygon\". We provide robust implementations of these concepts, which are formally known as polygonal Chain and PolyArea.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"We can compute the orientation of a chain as clockwise or counter-clockwise, can open and close the chain, create bridges between the various inner rings with the outer ring, and other useful functionality:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"p = PolyArea(Point2[(0,0), (2,0), (2,2), (1,3), (0,2), (0,0)])","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"The orientation of the above polygonal area is counter-clockwise (CCW):","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"orientation(p)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"We can get the outer polygonal chain, and reverse it:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"c = chains(p)[1]\n\nreverse(c)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"A closed chain (a.k.a. ring) has circular vertices:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"v = vertices(c)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"This means that we can index the vertices with indices that go beyond the range 1:nvertices(c). This is very useful for writing algorithms:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"v[1:10]","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"We can also compute angles of any given chain, no matter if it is open or closed:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"angles(c) * 180 / pi","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"The sign of these angles is a function of the orientation:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"angles(reverse(c)) * 180 / pi","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"In case of closed chains, we can compute inner angles as well:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"innerangles(c) * 180 / pi","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"And there is a lot more functionality available like for instance determining whether or not a polygonal area or chain is simple:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"issimple(p)","category":"page"},{"location":"index.html#Meshes","page":"Home","title":"Meshes","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Efficient (lazy) mesh representations are provided, including CartesianGrid and UnstructuredMesh:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"g = CartesianGrid(100, 100)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"No memory is allocated:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"@allocated CartesianGrid(10000, 10000, 10000)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"but we can still loop over the elements, which are quadrangles in 2D:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"collect(elements(g))","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"We can construct a general unstructured mesh with a global vector of points and a collection of Connectivity that store the indices to the global vector of points:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"points = Point2[(0,0), (1,0), (0,1), (1,1), (0.25,0.5), (0.75,0.5)]\ntris  = connect.([(3,1,5),(4,6,2)], Triangle)\nquads = connect.([(1,2,5,6),(5,6,3,4)], Quadrangle)\nmesh = UnstructuredMesh(points, [tris; quads])","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"The actual geometries of the elements are materialized in a lazy fashion like with the Cartesian grid:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"collect(elements(mesh))","category":"page"},{"location":"algorithms/sampling.html#Sampling","page":"Sampling","title":"Sampling","text":"","category":"section"},{"location":"algorithms/sampling.html","page":"Sampling","title":"Sampling","text":"sample\nSamplingMethod\nRegularSampling","category":"page"},{"location":"algorithms/sampling.html#Meshes.sample","page":"Sampling","title":"Meshes.sample","text":"sample(geometry, method)\n\nSample elements from geometry with method.\n\n\n\n\n\n","category":"function"},{"location":"algorithms/sampling.html#Meshes.SamplingMethod","page":"Sampling","title":"Meshes.SamplingMethod","text":"SamplingMethod\n\nA method for sampling from geometries.\n\n\n\n\n\n","category":"type"},{"location":"algorithms/sampling.html#Meshes.RegularSampling","page":"Sampling","title":"Meshes.RegularSampling","text":"RegularSampling(n1, n2, ..., np)\n\nSample geometry regularly using n1 points along the first parametric dimension, n2 points along the second parametric dimension, ..., np poitns along the last parametric dimension.\n\nExample\n\nSample sphere regularly with 360 longitudes and 180 latitudes:\n\nsample(Sphere((0,0,0), 1), RegularSampling(360, 180))\n\n\n\n\n\n","category":"type"}]
}
