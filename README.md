# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Installation

Create project : npm create vite@lastest ./
Install dependancies : npm i

Manage display from child component :
useState in parent
send setter to child
event calls setter to notify parent

## useState

dont forget attribut value={valueToWatch}

## UseEffect

Avoid setter inside
Uses Dependencies and trigger when a dependency changes
Used to init when comonent is mounted
/!\ DON'T FORGET TO CLEAN UP /!\

## UseRef

Saves DOM Element
ref = useRef -> useEffect

## useMemo

No Idea

## Custom Hooks

/!\ Hooks cannot be async:
define async function inside it /!\

## Memoisation

Perf optimizer

## Error Boundary

Enclose Component with ErrorBoundary
Set a FallBackComponent to display
Reset method
Give {error, resetMethod} to Fallback

## Lazy loading

new LazyComponent => lazy() importing defaultComponent
Enclose LazyComponent with a Suspense Component
Suspense support a FallbackComponent to display while loading

## useReducer

reducer(state, action)
/!\ return new objects as state /!\

returns [newState, dispatch]
takes (reducer, initialState)

## useContext

Send info to children
create context
create provider
create custom hook
Enclose with Provider
Or create a dedicated Component and passing it children
Create custom Hook instead of exporting Context

## Testing

npm i -D vitest jsdom @testing-library/react
add script test: vitest to package.json
config vite to add jsdom as test env
also define a setup file
import describe, it, expect, act
renderHook for Hooks
render for Components
screen.debug()
toMatchInlineSnapshot : generate expected html code
BLACK MAGIC HERE
user-event library to simulate user action
click(screen.[targetMethod])

## Render properties
itemRenderer function
OR
Component

## useSyncExternalStore
3 params : subscribe, getSnapshot, getServerSnapshot (SSR)

## React Router Dom
npm i react-router-dom
createBrowserRouter
path, element
return RouterProvider router={router}
Link to=[url]
NavLink detects active element
param path :id
const {is} = useParams()
children path element
Outlet Componentto display children
ErrorElement: ErrorComponent
const error = useRouteError() to get the error
load data during page loading
loader() => fetch
return defer to allow Component display while loading data
const data = useLoaderData
Get router state : const state = useNavigation
Suspense
    Await resolve={promise}
get promise result inside child Component useAsynvValue