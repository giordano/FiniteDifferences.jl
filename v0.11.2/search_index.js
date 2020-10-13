var documenterSearchIndex = {"docs":
[{"location":"pages/api/#Finite-Differences","page":"API","title":"Finite Differences","text":"","category":"section"},{"location":"pages/api/","page":"API","title":"API","text":"FiniteDifferenceMethod\nFiniteDifferenceMethod(::AbstractVector, ::Int; ::Int)\nFiniteDifferences.estimate_step\nforward_fdm\ncentral_fdm\nbackward_fdm\nextrapolate_fdm\nassert_approx_equal\nFiniteDifferences.DEFAULT_CONDITION","category":"page"},{"location":"pages/api/#FiniteDifferences.FiniteDifferenceMethod","page":"API","title":"FiniteDifferences.FiniteDifferenceMethod","text":"FiniteDifferenceMethod{G<:AbstractVector, C<:AbstractVector, E<:Function}\n\nA finite difference method.\n\nFields\n\ngrid::G: Multiples of the step size that the function will be evaluated at.\nq::Int: Order of derivative to estimate.\ncoefs::C: Coefficients corresponding to the grid functions that the function evaluations   will be weighted by.\nbound_estimator::Function: A function that takes in the function and the evaluation   point and returns a bound on the magnitude of the length(grid)th derivative.\n\n\n\n\n\n","category":"type"},{"location":"pages/api/#FiniteDifferences.FiniteDifferenceMethod-Tuple{AbstractArray{T,1} where T,Int64}","page":"API","title":"FiniteDifferences.FiniteDifferenceMethod","text":"FiniteDifferenceMethod(\n    grid::AbstractVector,\n    q::Int;\n    condition::Real=DEFAULT_CONDITION\n)\n\nConstruct a finite difference method.\n\nArguments\n\ngrid::Abstract: The grid. See FiniteDifferenceMethod.\nq::Int: Order of the derivative to estimate.\ncondition::Real: Condition number. See DEFAULT_CONDITION.\n\nReturns\n\nFiniteDifferenceMethod: Specified finite difference method.\n\n\n\n\n\n","category":"method"},{"location":"pages/api/#FiniteDifferences.estimate_step","page":"API","title":"FiniteDifferences.estimate_step","text":"function estimate_step(\n    m::FiniteDifferenceMethod,\n    f::Function,\n    x::T;\n    factor::Real=1,\n    max_step::Real=0.1 * max(abs(x), one(x))\n) where T<:AbstractFloat\n\nEstimate the step size for a finite difference method m. Also estimates the error of the estimate of the derivative.\n\nArguments\n\nm::FiniteDifferenceMethod: Finite difference method to estimate the step size for.\nf::Function: Function to evaluate the derivative of.\nx::T: Point to estimate the derivative at.\n\nKeywords\n\nfactor::Real=1. Factor to amplify the estimated round-off error by. This can be used   to force a more conservative step size.\nmax_step::Real=0.1 * max(abs(x), one(x)): Maximum step size.\n\nReturns\n\nTuple{T, <:AbstractFloat}: Estimated step size and an estimate of the error of the   finite difference estimate.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.forward_fdm","page":"API","title":"FiniteDifferences.forward_fdm","text":"forward_fdm(\n    p::Int,\n    q::Int;\n    adapt::Int=1,\n    condition::Real=DEFAULT_CONDITION,\n    geom::Bool=false\n)\n\nContruct a finite difference method at a forward grid of p linearly spaced points.\n\nArguments\n\np::Int: Number of grid points.\nq::Int: Order of the derivative to estimate.\n\nKeywords\n\nadapt::Int=1: Use another finite difference method to estimate the magnitude of the   pth order derivative, which is important for the step size computation. Recurse   this procedure adapt times.\ncondition::Real: Condition number. See DEFAULT_CONDITION.\ngeom::Bool: Use geometrically spaced points instead of linearly spaced points.\n\nReturns\n\nFiniteDifferenceMethod: The specified finite difference method.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.central_fdm","page":"API","title":"FiniteDifferences.central_fdm","text":"central_fdm(\n    p::Int,\n    q::Int;\n    adapt::Int=1,\n    condition::Real=DEFAULT_CONDITION,\n    geom::Bool=false\n)\n\nContruct a finite difference method at a central grid of p linearly spaced points.\n\nArguments\n\np::Int: Number of grid points.\nq::Int: Order of the derivative to estimate.\n\nKeywords\n\nadapt::Int=1: Use another finite difference method to estimate the magnitude of the   pth order derivative, which is important for the step size computation. Recurse   this procedure adapt times.\ncondition::Real: Condition number. See DEFAULT_CONDITION.\ngeom::Bool: Use geometrically spaced points instead of linearly spaced points.\n\nReturns\n\nFiniteDifferenceMethod: The specified finite difference method.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.backward_fdm","page":"API","title":"FiniteDifferences.backward_fdm","text":"backward_fdm(\n    p::Int,\n    q::Int;\n    adapt::Int=1,\n    condition::Real=DEFAULT_CONDITION,\n    geom::Bool=false\n)\n\nContruct a finite difference method at a backward grid of p linearly spaced points.\n\nArguments\n\np::Int: Number of grid points.\nq::Int: Order of the derivative to estimate.\n\nKeywords\n\nadapt::Int=1: Use another finite difference method to estimate the magnitude of the   pth order derivative, which is important for the step size computation. Recurse   this procedure adapt times.\ncondition::Real: Condition number. See DEFAULT_CONDITION.\ngeom::Bool: Use geometrically spaced points instead of linearly spaced points.\n\nReturns\n\nFiniteDifferenceMethod: The specified finite difference method.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.extrapolate_fdm","page":"API","title":"FiniteDifferences.extrapolate_fdm","text":"extrapolate_fdm(\n    m::FiniteDifferenceMethod,\n    f::Function,\n    x::T,\n    h::Real=0.1 * max(abs(x), one(x));\n    power=nothing,\n    breaktol=Inf,\n    kw_args...\n) where T<:AbstractFloat\n\nUse Richardson extrapolation to refine a finite difference method.\n\nTakes further in keyword arguments for Richardson.extrapolate. This method automatically sets power = 2 if m is symmetric and power = 1. Moreover, it defaults breaktol = Inf.\n\nArguments\n\nm::FiniteDifferenceMethod: Finite difference method to estimate the step size for.\nf::Function: Function to evaluate the derivative of.\nx::T: Point to estimate the derivative at.\nh::Real=0.1 * max(abs(x), one(x)): Initial step size.\n\nReturns\n\nTuple{<:AbstractFloat, <:AbstractFloat}: Estimate of the derivative and error.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.assert_approx_equal","page":"API","title":"FiniteDifferences.assert_approx_equal","text":"assert_approx_equal(x, y, ε_abs, ε_rel[, desc])\n\nAssert that x is approximately equal to y.\n\nLet eps_z = eps_abs / eps_rel. Call x and y small if abs(x) < eps_z and abs(y) < eps_z, and call x and y large otherwise.  If this function returns True, then it is guaranteed that abs(x - y) < 2 eps_rel max(abs(x), abs(y)) if x and y are large, and abs(x - y) < 2 eps_abs if x and y are small.\n\nArguments\n\nx: First object to compare.\ny: Second object to compare.\nε_abs: Absolute tolerance.\nε_rel: Relative tolerance.\ndesc: Description of the comparison. Omit or set to false to have no description.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.DEFAULT_CONDITION","page":"API","title":"FiniteDifferences.DEFAULT_CONDITION","text":"FiniteDifferences.DEFAULT_CONDITION\n\nThe default condition number used when computing bounds. It provides amplification of the ∞-norm when passed to the function's derivatives.\n\n\n\n\n\n","category":"constant"},{"location":"pages/api/#Gradients","page":"API","title":"Gradients","text":"","category":"section"},{"location":"pages/api/","page":"API","title":"API","text":"grad\njacobian\njvp\nj′vp\nto_vec","category":"page"},{"location":"pages/api/#FiniteDifferences.grad","page":"API","title":"FiniteDifferences.grad","text":"grad(fdm, f, xs...)\n\nCompute the gradient of f for any xs for which to_vec is defined.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.jacobian","page":"API","title":"FiniteDifferences.jacobian","text":"jacobian(fdm, f, x...)\n\nApproximate the Jacobian of f at x using fdm. Results will be returned as a Matrix{<:Real} of size(length(y_vec), length(x_vec)) where x_vec is the flattened version of x, and y_vec the flattened version of f(x...). Flattening performed by to_vec.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.jvp","page":"API","title":"FiniteDifferences.jvp","text":"jvp(fdm, f, xẋs::Tuple{Any, Any}...)\n\nCompute a Jacobian-vector product with any types of arguments for which to_vec is defined. Each 2-Tuple in xẋs contains the value x and its tangent ẋ.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.j′vp","page":"API","title":"FiniteDifferences.j′vp","text":"j′vp(fdm, f, ȳ, x...)\n\nCompute an adjoint with any types of arguments x for which to_vec is defined.\n\n\n\n\n\n","category":"function"},{"location":"pages/api/#FiniteDifferences.to_vec","page":"API","title":"FiniteDifferences.to_vec","text":"to_vec(x)\n\nTransform x into a Vector, and return the vector, and a closure which inverts the transformation.\n\n\n\n\n\n","category":"function"},{"location":"#FiniteDifferences.jl:-Finite-Difference-Methods","page":"Home","title":"FiniteDifferences.jl: Finite Difference Methods","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Build Status) (Image: codecov.io) (Image: Latest Docs)","category":"page"},{"location":"","page":"Home","title":"Home","text":"FiniteDifferences.jl approximates derivatives of functions using finite difference methods.","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Compute the first derivative of sin with a 5th order central method:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> central_fdm(5, 1)(sin, 1) - cos(1)\n-1.247890679678676e-13","category":"page"},{"location":"","page":"Home","title":"Home","text":"Compute the second derivative of sin with a 5th order central method:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> central_fdm(5, 2)(sin, 1) + sin(1)\n9.747314066999024e-12","category":"page"},{"location":"","page":"Home","title":"Home","text":"Construct a FiniteDifferences on a custom grid:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> method, report = fdm([-2, 0, 5], 1, report=true)\n(FiniteDifferences.method, FiniteDifferencesReport:\n  order of method:       3\n  order of derivative:   1\n  grid:                  [-2, 0, 5]\n  coefficients:          [-0.357143, 0.3, 0.0571429]\n  roundoff error:        2.22e-16\n  bounds on derivatives: 1.00e+00\n  step size:             3.62e-06\n  accuracy:              6.57e-11\n)\n\njulia> method(sin, 1) - cos(1)\n-2.05648831297367e-11","category":"page"},{"location":"","page":"Home","title":"Home","text":"Compute a directional derivative:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> f(x) = sum(x)\nf (generic function with 1 method)\n\njulia> central_fdm(5, 1)(ε -> f([1, 1, 1] + ε * [1, 2, 3]), 0) - 6\n-2.922107000813412e-13","category":"page"}]
}
