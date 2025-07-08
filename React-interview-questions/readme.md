### ✅ React Scenario-Based Questions with Answers

#### 1. Performance Optimization in Widget Dashboard

##### Q: Your dashboard has 10+ widgets. Each re-renders when one changes. How do you improve performance?

###### A: I’d first identify the re-renders using React DevTools. Then:

- Wrap widgets with React.memo to avoid unnecessary re-renders

- Use useCallback and useMemo for props that are functions or derived data

- Consider splitting state: use Context or Redux only when needed, else keep local

- Enable React Profiler to monitor and optimize expensive operations

#### 2. Choosing a State Management Tool

##### Q: Your app has isolated modules with both shared and local state. Would you choose Context, Redux Toolkit, or Zustand?

A: If shared state is simple and doesn't need middleware, I’d use Context API with useReducer. For large-scale apps with side effects and dev tools, I’d prefer Redux Toolkit. For lightweight yet powerful local/global state without boilerplate, I’d choose Zustand, especially in microfrontend scenarios.

#### 3. Handling Input Lag in Large Lists

##### Q: Controlled input becomes slow when tied to large list re-render. Fix?

###### I’d decouple the input from the list by:

- Using useDeferredValue (React 18) to prioritize input

- Virtualizing the list using react-window or react-virtualized

- Memoizing list rows and ensuring stable props

- Possibly debouncing the input if filtering is involved

#### 4. API Fetching on Tab Switch

##### Q: You want to fetch fresh data on tab change without repeated calls. How?

###### A: Use a flag in the tab state to track freshness

- On useEffect, fetch data only if it hasn't been fetched or is stale

- Use SWR or React Query for automatic caching + revalidation

- Cancel in-flight requests using AbortController on unmount

#### 5. Fixing Race Conditions in useEffect

##### Q: API calls in useEffect cause memory leaks when tabs switch quickly. Fix?

###### A: Wrap the async function in a flag or use AbortController:

```js
const controller = new AbortController();
useEffect(() => {
  fetch(url, { signal: controller.signal });
  return () => controller.abort(); // Cleanup
}, [url]);
```

Also, validate response before setting state to ensure component is still mounted.

#### 6. Form Validation Architecture

##### Q: How do you build a complex form with dynamic and API-driven validation?

A:
I’d use a library like React Hook Form with yup or custom schema validators. API-driven validation can be done on onBlur. For dynamic rules, I’d pass validation logic from config. I’d separate field components, manage form state centrally, and use useEffect for live validation.

#### 7. Code Splitting for Faster Load

##### Q: Your React app loads slowly. How do you implement code splitting?

A:
I’d use React.lazy + Suspense to split route-level components. Tools like loadable-components allow SSR with code-splitting. I’d also analyze bundle size using webpack-bundle-analyzer and split vendor packages into separate chunks.

#### 8. React.memo Still Re-Renders

##### Q: A memoized component is still re-rendering. Why?

###### A: Likely reasons:

- Props are new references on each render (functions, objects)

- Deep prop comparison is needed (use custom areEqual)

- Context value change triggers re-render
  I’d inspect with React DevTools and wrap props with useMemo/useCallback.

#### 9. Complex Role-Based JSX Rendering

##### Q: You need to show different UIs for 10 user roles. How to avoid cluttered JSX?

###### A: I’d use a mapping config object:

```js
const roleViews = {
  admin: <AdminView />,
  user: <UserView />,
  guest: <GuestView />,
};
return roleViews[user.role] || <DefaultView />;
```

Or separate role-specific components and use a clean switch or factory pattern.

#### 10. Embedding a Non-React Trading Widget

##### Q: How do you safely integrate a DOM-manipulating chart (e.g., TradingView)?

###### A: I’d wrap it in a useEffect and use a ref:

```js
useEffect(() => {
  const chart = new TradingViewWidget({ container_id: ref.current.id });
  return () => chart.remove(); // Clean up
}, []);
```

Also, memoize props and avoid re-initializing on re-renders.

### 🔷 Category: State Management

#### 11. Complex Global + Local State Handling

##### Q: You have a form with local draft state and global state (Redux) that needs to sync on save. How would you design this?

Answer: I’d keep form inputs in local state (useState or useReducer) for responsiveness. On submit, I’d dispatch a Redux action to update global state. If the form should preload global data, I’d hydrate local state via useEffect.

#### 12. Managing Derived State

##### Q: You need to show user roles based on permissions stored in Redux. How would you manage this derived data?

Answer : I’d create memoized selectors using reselect (or createSelector) to derive roles from permissions. Keeps UI components clean and avoids unnecessary recalculations.

#### 13. Conditional Store Updates

##### Q: You only want to update global state if the new value differs from the current one. How would you prevent unnecessary updates?

Answer:
I’d add a condition in the reducer or inside the thunk:

```js
if (newValue !== currentValue) {
  dispatch(updateAction(newValue));
}
```

Or, in Redux Toolkit, use the prepare function to validate payloads.

#### 14. Multi-Slice Coordination

##### Q: Two Redux slices (e.g., auth and userProfile) need to update together on login. How do you sync them?

Answer: I’d use a single loginSuccess thunk or middleware to dispatch both updates, or listen to one action in multiple reducers using extraReducers in Redux Toolkit.

#### 15. Avoiding Prop Drilling

##### Q: You’re passing props through 4–5 levels of nested components. How do you fix this?

Answer: Use Context API or move to Redux/Zustand if it’s shared widely. Alternatively, restructure components or use a hook-based pattern to encapsulate shared logic (like useUser()).

#### 16. Refreshing State Without Reload

##### Q: How do you reset form state and Redux slice when navigating to a screen again?

Answer: In the component’s useEffect, on unmount I’d dispatch a resetSlice() action and clear local form states:

```js
useEffect(() => {
  return () => dispatch(resetForm());
}, []);
```

#### 17. Choosing Zustand over Redux

##### Q: When would you prefer Zustand over Redux Toolkit?

Answer: For lightweight, component-scoped, or transient state, Zustand is perfect. It’s simpler, doesn’t require boilerplate or reducers, and allows direct updates. I’d use Zustand in dashboards, multi-tab UIs, or microfrontends.

#### 18. Cross-Tab State Sharing

##### Q: You want logged-in status to sync across tabs. How?

Answer:
Use localStorage events:

```js
window.addEventListener("storage", (e) => {
  if (e.key === "authToken") {
    updateStore();
  }
});
```

Also, use BroadcastChannel or service workers for complex sync.

#### 19. Handling Circular Dependencies in Stores

##### Q: Slice A depends on Slice B and vice versa. How to resolve?

Answer: Use selectors or thunks to decouple logic. Never import one slice into another directly. Instead, pull data using getState() inside async thunks or useSelector() in UI.

#### 20. Persisting Redux Store Securely

##### Q: You want to persist user data in the Redux store, but securely. How?

Answer:

- Use redux-persist with encryption:
- Only persist specific slices (e.g., not passwords or tokens)
- Use middleware like redux-persist-transform-encrypt
- Optionally store sensitive data in sessionStorage instead of localStorage

### 🔷 Category: Rendering & Component Architecture

#### 21. Controlled vs Uncontrolled Components

##### Q: A file input isn’t reflecting the uploaded file in state. What’s happening?

Answer: File inputs are usually uncontrolled. To access the file, you need to use a ref:

```js
const fileRef = useRef();
const file = fileRef.current.files[0];
```

If you try to make it controlled (value={file}), it won’t work because file inputs can't be fully controlled in React.

#### 22. Component Re-rendering Without Prop Change

##### Q: A component keeps re-rendering even though its props haven’t changed. What could be wrong?

###### Answer: Possibilities:

- Parent is re-rendering and passing new object/function references
- State or context is changing deep down
- React.memo isn’t used (or areEqual isn’t working)
- I’d inspect with React DevTools to confirm source of render.

#### 23. SSR Hydration Mismatch

##### Q: You see a warning about hydration mismatch in your React app with Next.js. How would you debug it?

###### A: I’d check:

- Client-only logic like window or localStorage is not inside render() without useEffect
- Date/time-dependent code or random values (e.g. Math.random()) causing different SSR/CSR content
- Conditional rendering that varies by environment
- I’d wrap dynamic parts in useEffect or use next/dynamic with ssr: false.

#### 24. Nested Components Cause Lag

##### Q: A deeply nested component tree causes UI lag when parent updates. Fix?

###### Answer :I’d:

- Extract expensive children and wrap with React.memo
- Flatten the component structure where possible
- Move logic into custom hooks
- Use Profiler to identify render bottlenecks

#### 25. Unmounted Component Warning

##### Q: You get Can't perform a React state update on an unmounted component. What causes it?

Answer:

- A state update is happening after the component has been unmounted. Fix:
- Clean up async effects with useEffect → return () => {}
- Use a flag or AbortController to cancel API calls
- Ensure subscriptions (like WebSocket) are cleared

#### 26. Portal Rendering Use Case

##### Q: When would you use React Portals?

Answer:
When rendering outside the parent DOM hierarchy — e.g., modals, tooltips, dropdowns. Prevents z-index/CSS overflow issues. I’d use:

```js
ReactDOM.createPortal(<Modal />, document.getElementById("modal-root"));
```

#### 27. Custom Hook Creates Infinite Loop

##### Q: You built a custom hook but it causes an infinite loop. Why?

Answer: The hook likely includes a useEffect with non-stable dependencies, like a new function or object every render.

- Solution:
  - Use useCallback or useMemo to stabilize inputs
  - Validate useEffect deps carefully

#### 28. Preventing Re-renders of List Items

##### Q: A list of 100+ items re-renders on minor change. How do you optimize?

Answer:

- Use React.memo for list items
- Ensure each item has a stable key (avoid index if items can reorder)
- Use windowing (react-window) for long lists
- Memoize data passed to list items (useMemo)

#### 29. Dynamically Loading Components

##### Q: You want to lazily load a component only when needed. How?

Answer:
Use React.lazy + Suspense:

```js
const LazyChart = React.lazy(() => import("./Chart"));
return (
  <Suspense fallback={<Spinner />}>
    <LazyChart />
  </Suspense>
);
```

- Can also use next/dynamic in Next.js.

#### 30. Render Prop Pattern Use Case

##### Q: When would you use the render prop pattern?

Answer:
When you want to share stateful behavior but keep rendering flexible. E.g., a MouseTracker component:

```js
<MouseTracker
  render={(x, y) => (
    <div>
      {x}, {y}
    </div>
  )}
/>
```

Today, this is mostly replaced with custom hooks for cleaner syntax.

### 🔷 Category: Performance Optimization

#### 31. Repeated Expensive Calculations

##### Q: A component recalculates a financial projection on every render. How do you prevent this?

Answer: Wrap the expensive logic inside useMemo:

```js
const projection = useMemo(() => calculateProjection(data), [data]);
```

Only recalculates when data changes — avoids wasted computation.

#### 32. Preventing Layout Shifts During Image Load

##### Q: Your layout jumps when images load. How would you prevent that?

Answer:

- Pre-define width/height using aspect-ratio or CSS
- Use a placeholder (e.g., blur) or skeleton loader
- Consider next/image (Next.js) for automatic optimization

#### 33. Reducing Initial Bundle Size

##### Q: Your app’s main bundle is large. How do you fix it?

Answer :

- Use code splitting via React.lazy or dynamic imports
- Split vendor packages using Webpack SplitChunksPlugin
- Remove unused libraries (tree shaking)
- Load heavy components only when needed (route-level)

#### 34. Avoiding Unnecessary useEffect Runs

##### Q: Your useEffect runs too often. What do you check?

Answer:

- Review the dependency array
- Memoize callback dependencies with useCallback
- Avoid unnecessary object/function references in deps

#### 35. Optimizing Renders for Mobile

##### Q: App feels sluggish on low-end mobile. What optimizations would you apply?

Answer:

- Reduce component nesting
- Use virtualization (react-window)
- Avoid animations on mount
- Use React.memo, useMemo, and shouldComponentUpdate
- Compress images and fonts

#### 36. Component Re-renders on Unrelated State Change

##### Q: A widget re-renders when unrelated global state changes. Fix?

Answer:

- Use useSelector with shallowEqual or createSelector
- Wrap components in React.memo
- Lift unrelated state out or split into smaller contexts

#### 37. Debouncing Input

##### Q: User search input triggers too many API calls. What’s the fix?

Answer:
Debounce using useCallback + a utility like lodash or custom debounce hook:

```js
const debouncedSearch = useCallback(
  debounce((query) => fetchData(query), 300),
  []
);
```

#### 38. Avoiding Prop Drilling Performance Bottlenecks

##### Q: Prop drilling through deep components causes performance issues. How do you restructure?

Answer:

- Use Context or state containers (like Zustand/Redux)
- Pass only necessary props to leaf nodes
- Use composition instead of passing multiple props

#### 39. Profiling Render Bottlenecks

##### Q: Your app slows down on certain pages. How do you debug?

Answer:

- Use React Profiler to find slow renders
- Add performance markers with console.time
- Check DevTools for unnecessary re-renders or large data usage

#### 40. Caching External API Data

##### Q: You fetch currency rates frequently but data doesn’t change often. What would you do?

Answer:

- Use a caching library like SWR or React Query
- Set stale time or polling interval
- Store fetched data in memory or localStorage if needed

### 🔷 Category: Forms & User Input Handling

#### 41. Complex Multi-Step Form Management

##### Q: You're building a multi-step onboarding form with validation. How would you structure it?

Answer:

- Use a state machine or useReducer to manage steps
- Store form state in a parent component or context
- Validate each step before progressing
- Optionally use React Hook Form with a schema-based library like Yup

#### 42. Dynamic Form Fields (Field Array)

##### Q: How do you let users dynamically add/remove multiple address inputs?

Answer:

- Use field arrays:
- With React Hook Form: useFieldArray()
- With manual state: store inputs in an array via useState
- Render each input using map(), and handle removal by index

#### 43. Third-Party Controlled Components

##### Q: You're using a custom date picker that doesn’t support value and onChange props. How do you integrate it with your form?

Answer:
Wrap it in a Controller (React Hook Form) or sync using ref + custom useEffect listeners. For example:

```js
<Controller
  name="dob"
  control={control}
  render={({ field }) => <CustomDatePicker onChange={field.onChange} />}
/>
```

#### 44. Validating Fields on Blur vs Submit

##### Q: A form should only validate on blur, not on every key press. How?

Answer:
With React Hook Form:

```js
useForm({ mode: "onBlur" });
```

Or add manual validation triggers only on onBlur.

#### 45. Preventing Form Re-renders on Each Input

##### Q: You have a large form with 50+ fields and typing causes lag. How do you optimize?

Answer:

- Use React Hook Form — it isolates input state, preventing whole form re-renders
- Avoid useState for each field
- Memoize components, and split into isolated sections if needed

#### 46. Conditional Form Fields

##### Q: A field should appear only if another field has a specific value. How would you implement this?

Answer:
Use conditional rendering in JSX:

```js
{
  watch("hasAddress") && <AddressField />;
}
```

Or manage visibility with useWatch() (React Hook Form) or custom state logic.

#### 47. Persisting Form State on Navigation

##### Q: How do you preserve form inputs when navigating away and back?

Answer:

- Store values in local/sessionStorage and rehydrate on mount
- Use context or Redux if global
- React Router: wrap form component in layout and avoid unmounting

#### 48. Integrating Form with Redux

##### Q: Should you keep form data in Redux?

###### Answer: Only if:

- The form needs to share data across routes or modules
- You need autosave or audit logs
- You want advanced undo/redo
- Otherwise, use local state or useForm — it’s cleaner and faster for isolated forms.

#### 49. Validating via Backend

##### Q: A username input should validate uniqueness via an API. When should the call be made?

Answer:

- On blur, not on every keystroke (to avoid spamming API)
- Debounce or throttle the call
- Use an async validation method inside form schema or manually with useEffect

#### 50. Preventing Browser Autofill

##### Q: A form shows incorrect autofilled values by Chrome. How to prevent this?

Answer:

- Use autoComplete="off" on <form> and fields
- Use hidden dummy fields to trick autofill (hacky but works)
- Some custom fields need name attribute removed

### 🔷 Category: Routing, Navigation & Layouts

#### 51. Guarding Protected Routes

##### Q: You want to restrict a route unless a user is logged in. How do you implement this?

Answer:
Use a higher-order component (HOC) or wrapper route that checks auth:

```jsx
{
  isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
```

- ###### In Next.js:
  - use getServerSideProps or middleware to protect routes server-side.

#### 52. Scroll Restoration on Route Change

##### Q: You navigate to a new page, but scroll stays at the bottom. How do you reset it?

Answer :
In React Router, listen to location change:

```js
useEffect(() => {
  window.scrollTo(0, 0);
}, [location.pathname]);
```

- ###### In Next.js
  - this is automatic unless overridden.

#### 53. Nested Layouts in Next.js

##### Q: You need different layouts for dashboard and marketing pages. How do you handle this?

Answer:
Use the getLayout pattern:

```jsx
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
```

Then wrap your App in \_app.js:

```js
const getLayout = Component.getLayout || ((page) => page);
return getLayout(<Component {...pageProps} />);
```

#### 54. Route-Based Code Splitting

##### Q: How do you load different components for different routes without bloating the main bundle?

Answer:
Use React.lazy() + Suspense for route components:

```js
const Profile = React.lazy(() => import("./Profile"));
<Route
  path="/profile"
  element={
    <Suspense fallback={<Spinner />}>
      <Profile />
    </Suspense>
  }
/>;
```

- ###### In Next.js
  - dynamic import handles this automatically.

#### 55. Dynamic Route Parameters

##### Q: How do you handle dynamic routes like /user/:id?

Answer:
In React Router:

```js
const { id } = useParams();
```

- ###### In Next.js:

```js
// pages/user/[id].js
const { id } = useRouter().query;
```

#### 56. Redirect After Login

##### Q: After login, you want to redirect to the previous route user tried to access. How?

Answer:

- Store intended path in state or query param
- After login, use navigate(from) (React Router)
- ###### In Next.js
  - use router.push(returnTo || '/')

#### 57. Active Link Highlight

##### Q: How do you highlight the current page in a navbar?

Answer:
In React Router:

```js
<Link className={location.pathname === "/home" ? "active" : ""} />
```

- ###### In Next.js:

```js
<Link href="/about" className={router.pathname === "/about" ? "active" : ""} />
```

Or use libraries like clsx for cleaner logic.

#### 58. Route Param Change Not Triggering useEffect

##### Q: You’re using useEffect([params.id]), but component doesn't update. What could be wrong?

###### Answer: Most likely:

- The component isn’t unmounting (stays mounted), so old state sticks
- The useEffect logic doesn’t reset values before API call
- ###### Solution: reset dependent state on param change inside useEffect.

#### 59. Handling 404 Pages

##### Q: How do you render a custom 404 page?

Answer:

###### In React Router:

- add a path="\*" fallback route.

###### In Next.js:

- create pages/404.js, and it will automatically be used for unknown routes.

#### 60. Layout Not Updating Between Routes

##### Q: You switch from public layout to dashboard layout, but layout component doesn't change. Why?

Answer:

- Layout is likely wrapped around Router improperly.
- In React Router, structure should be:

```js
<Route element={<DashboardLayout />}>
  <Route index element={<Home />} />
</Route>
```

- ######In Next.js:
  - check that getLayout is dynamic per page.

### 🔷 Category: Testing & Debugging

#### Unit Testing a Button Click

##### Q: You have a button that calls a handleSubmit function. How would you test that it was triggered?

Answer:
Use React Testing Library with Jest:

```js
const handleSubmit = jest.fn();
render(<Button onClick={handleSubmit} />);
fireEvent.click(screen.getByText("Submit"));
expect(handleSubmit).toHaveBeenCalled();
```

#### 62. Testing useEffect Fetch Call

##### Q: You want to test a component that fetches data on mount. How?

Answer:

- Mock fetch or API client
- Use waitFor to wait for async updates:

```js
mockFetch.mockResolvedValueOnce(mockData);
render(<Component />);
await waitFor(() => expect(screen.getByText(/Result/)).toBeInTheDocument());
```

#### 63. Form Field Validation Test

##### Q: How do you test if an error message shows when input is empty?

Answer:

```js
render(<MyForm />);
fireEvent.click(screen.getByText("Submit"));
expect(screen.getByText("Name is required")).toBeInTheDocument();
```

#### 64. Testing Context-Consuming Component

##### Q: How do you test a component that reads from a context?

Answer:

- Wrap the component in a custom provider with mock values:

```js
render(
  <UserContext.Provider value={{ name: "Vineet" }}>
    <Profile />
  </UserContext.Provider>
);
```

#### 65. Mocking useNavigate or useRouter

##### Q: You want to test if navigation occurs after a form submits. How?

Answer:

- Mock useNavigate (React Router) or useRouter().push (Next.js):

```js
jest.mock("react-router-dom", () => ({
...jest.requireActual("react-router-dom"),
useNavigate: () => mockNavigate
}));
Then assert: expect(mockNavigate).toHaveBeenCalledWith("/success");
```

#### 66. Testing useCallback Memoization

##### Q: A memoized callback function is passed to a child. How would you test it stays stable?

Answer:
Spy on the function and test if it's the same reference across renders:

```js
const { rerender } = render(<Parent />);
const firstFn = getCallback();
rerender(<Parent />);
const secondFn = getCallback();
expect(firstFn).toBe(secondFn);
```

#### 67. CI Build Fails Due to Failing Tests

##### Q: A test passes locally but fails in CI (GitHub Actions). What could be the reason?

Answer:

- CI runs headless; issues with timers, async rendering
- CI lacks required mocks for fetch/axios
- Environmental differences (node version, timezone, etc.)
- Use --detectOpenHandles and check for unhandled promises or timers.

#### 68. Snapshot Testing a Component

##### Q: How do you verify a component UI hasn't changed unexpectedly?

Answer:
Use snapshot tests:

```js
const { container } = render(<Header />);
expect(container).toMatchSnapshot();
```

- Useful for visual consistency, but avoid for highly dynamic UIs.

#### 69. Mocking Debounced Handlers

##### Q: You have a debounced input change. How do you test it?

Answer:
Use Jest's fake timers:

```js
jest.useFakeTimers();
fireEvent.change(input, { target: { value: "abc" } });
jest.advanceTimersByTime(300);
expect(callback).toHaveBeenCalled();
```

#### 70. Testing Lazy-Loaded Components

##### Q: Your component uses React.lazy(). How would you test it?

Answer:
Wrap in <Suspense> during test render:

```js
render(
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
expect(await screen.findByText("Loaded")).toBeInTheDocument();
```

### 🔷 Category: API Integration & Side Effects

#### 71. Handling Loading, Error, and Success States

##### Q: You're fetching user profile data. How would you manage loading, success, and error states?

Answer:
Use a combination of useState and useEffect:

```js
const [status, setStatus] = useState("idle");
useEffect(() => {
  setStatus("loading");
  fetchData()
    .then(() => setStatus("success"))
    .catch(() => setStatus("error"));
}, []);
```

Or use React Query which handles this internally.

#### 72. Canceling an API Request

##### Q: User switches pages before an API request completes. How do you cancel it?

Answer:
Use AbortController inside useEffect:

```js
const controller = new AbortController();
fetch(url, { signal: controller.signal });

return () => controller.abort(); // on unmount
```

#### 73. Handling Multiple Concurrent API Calls

##### Q: You need to fetch product details for each item in a cart. How?

Answer:
Use Promise.all:

```js
const data = await Promise.all(productIds.map((id) => fetchProduct(id)));
```

Optionally show partial loading UI using Promise.allSettled.

#### 74. Retry Logic on Failure

##### Q: You want to retry a request up to 3 times if it fails. How?

Answer: Use recursion or a library like axios-retry. Example:

```js
const fetchWithRetry = async (attempts = 3) => {
  try {
    return await fetchData();
  } catch (err) {
    if (attempts > 1) return fetchWithRetry(attempts - 1);
    throw err;
  }
};
```

#### 75. Optimistic UI Update

##### Q: After liking a post, you want the UI to show the update before the server responds. How?

Answer:
Update local state immediately. If the request fails, rollback:

```js
const [likes, setLikes] = useState(initialLikes);

const handleLike = async () => {
  setLikes(likes + 1); // optimistic
  try {
    await api.like();
  } catch {
    setLikes(likes); // rollback
  }
};
```

#### 76. Polling an API Every X Seconds

##### Q: You want to poll data every 10 seconds. How?

Answer:
Use setInterval inside useEffect:

```js
useEffect(() => {
  const interval = setInterval(fetchData, 10000);
  return () => clearInterval(interval);
}, []);
```

React Query also supports polling with refetchInterval.

#### 77. Handling API Pagination

###### Q: How do you load more items when the user scrolls?

Answer:

- Track current page in state
- On scroll, increment page and fetch new data
- Use IntersectionObserver for better performance
- React Query or SWR also supports infinite queries.

#### 78. Retry Failed Form Submission with Error

##### Q: A form fails due to 500 error. How do you retry without retyping?

Answer:

- Keep form state intact
- Display the error
- Allow retry via a “Retry” button that reuses the same payload

#### 79. Secure API Call with Token Expiry

##### Q: If a token expires, how do you refresh it before retrying the original API call?

Answer:

- Intercept 401 errors (axios interceptors)
- Refresh token via a separate call
- Retry the original request after new token is set

#### 80. Error Boundary for API Failures

##### Q: How do you catch rendering errors from failed API responses?

Answer:
Use an Error Boundary for UI fallback and toast/log error:

```js
class ErrorBoundary extends React.Component {
  componentDidCatch(error) {
    logError(error);
  }
  render() {
    return this.state.hasError ? <Fallback /> : this.props.children;
  }
}
```

- Use throw new Error('API failed') inside components if needed.

### 🔷 Category: Advanced Patterns & Architecture

#### 81. Reusing Logic Between Multiple Components

##### Q: You have two components needing the same timer logic. How do you avoid duplication?

Answer:
Extract the logic into a custom hook:

```js
function useTimer(start) {
  const [time, setTime] = useState(start);
  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);
  return time;
}
```

Use it in both components.

#### 82. Extending Component Behavior

##### Q: You want to add behavior to an existing component (e.g. logging props). How?

Answer:
Use a Higher-Order Component (HOC):

```js
function withLogger(WrappedComponent) {
  return function (props) {
    useEffect(() => console.log(props), [props]);
    return <WrappedComponent {...props} />;
  };
}
```

#### 83. Building a Plugin-Based Architecture

##### Q: You want a dashboard to dynamically load widgets based on config. How?

Answer:

- Use a plugin registry pattern:
- Store plugin components in a registry object
- Load components dynamically based on config:

```js
const plugins = { chart: ChartWidget, table: TableWidget };
const Widget = plugins[config.type];
return <Widget {...config.props} />;
```

#### 84. Compound Component Pattern

##### Q: You want to build a Tabs component where child Tab and TabPanel know their parent. How?

Answer:
Use compound components:

```js
<Tabs>
  <Tabs.Tab label="One">...</Tabs.Tab>
  <Tabs.Tab label="Two">...</Tabs.Tab>
</Tabs>
```

Inside Tabs, share state using React.cloneElement() or context.

#### 85. Scoped Styling Per Component

##### Q: You want styles of one component to not affect others. How?

Answer:

- Use CSS Modules (Component.module.css)
- Or use a CSS-in-JS solution (Styled-components, Emotion)
- Or apply strict BEM naming conventions

#### 86. Dynamic Hook Creation

##### Q: You need to create multiple similar hooks (useBTCPrice, useETHPrice). Avoid duplication?

Answer:
Make a factory hook:

```js
const useCryptoPrice = (symbol) => {
  // fetch logic here
};

const useBTCPrice = () => useCryptoPrice("BTC");
```

#### 87. Component Architecture for Reusability

##### Q: You’re building a design system (Button, Input, etc). What architectural pattern do you follow?

Answer:

- Use Atomic Design:

  - Atoms: basic (Button, Label)

  - Molecules: grouped (FormInput)

  - Organisms: larger sections (Form, Modal)

- Ensure components are themeable, accessibility-compliant, and stateless.

#### 88. Avoiding Prop Bloat in Deep Trees

##### Q: You pass many unrelated props to child components. How do you clean this?

###### Answer: Use:

- Context API (if it’s shared deeply)
- Decompose props into logical objects (e.g., formProps, userProps)
- Consider isolating parts into subcomponents

#### 89. When to Use Render Props

##### Q: When would you use render props instead of hooks or HOC?

Answer:
Render props are good when:

- You need to customize what to render based on logic
- You’re building reusable utilities (e.g. mouse position, scroll, drag-drop)
  Example:

```js
<Mouse>
  {({ x, y }) => (
    <div>
      {x}, {y}
    </div>
  )}
</Mouse>
```

#### 90. Lazy Initialization of State

##### Q: You have an expensive state initialization. How to avoid re-running on every render?

###### A: Use the lazy initializer in useState:

```js
const [state, setState] = useState(() => expensiveInit());
```

- This ensures the function runs only once, not on every re-render.

### 🔷 Category: React + TypeScript & Tooling

#### 91. Typing Component Props

##### Q: How do you type a component that takes title: string and count?: number?

Answer:

```ts
interface Props {
title: string;
count?: number;
}

const Header: React.FC<Props> = ({ title, count }) => { ... };
```

#### 92. Typing a Custom Hook

##### Q: You created a hook that returns a boolean and a toggle function. How would you type it?

Answer:

```ts
function useToggle(initial: boolean): [boolean, () => void] {
...
}
```

Usage:

```ts
const [isOpen, toggle] = useToggle(false);
```

#### 93. Typing useRef for a DOM Element

##### Q: You want a ref pointing to an input. How do you type it?

Answer:

```ts
const inputRef = useRef<HTMLInputElement>(null);
```

94. Typing an Event Handler
    Q: How do you type an onChange handler for an input field?

Answer:

```ts
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... };
```

#### 95. Typing Children Prop

##### Q: You created a Card component that wraps children. How do you type it?

Answer:

```ts
interface Props {
  children: React.ReactNode;
}
```

#### 96. Typing Dynamic Object Keys

##### Q: You want a form state object like { name: string; [key: string]: string }. How?

Answer:

```ts
interface FormState {
  [key: string]: string;
}
```

Or more strict:

```ts
type FieldKey = "name" | "email" | "dob";
type FormState = Record<FieldKey, string>;
```

#### 97. Typing useReducer State and Actions

##### Q: You use useReducer. How do you type state and action properly?

Answer:

```ts
type State = { count: number };
type Action = { type: 'inc' } | { type: 'dec' };

function reducer(state: State, action: Action): State { ... }
```

#### 98. Using Generics in Component Props

##### Q: You want a reusable list component that works for any data type. How?

Answer:

```ts
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <>{items.map(renderItem)}</>;
}
```

#### 99. Setting Up ESLint + Prettier in React TypeScript App

##### Q: What do you use to maintain consistent code style and catch bugs early?

Answer:

- Use eslint-config-next or airbnb-typescript
- Combine with Prettier (eslint-config-prettier)
- Enable rules like @typescript-eslint/no-explicit-any
- Set up Husky + lint-staged for pre-commit linting

#### 100. Improving IntelliSense in Component APIs

##### Q: You want better autocomplete and documentation while using your custom components. How?

Answer:

- Write full prop types with comments
- Export component with React.FC<Props>
- Add default values using defaultProps or default parameters
- Document with JSDoc above props

### 🔷 Testing & Debugging

#### Debugging Test That Passes Locally but Fails on CI

##### Q: Why might a test pass on your machine but fail in GitHub Actions?

###### Answer: Common causes:

- Timing issues or reliance on real timers
- Screen size/resolution differences
- Missing mocks or environment variables
- Use jest.setTimeout, ensure deterministic tests, and mock external APIs.

#### Testing Modal Open/Close Behavior

##### Q: How do you test if a modal opens on click and closes on outside click?

Answer:

```js
fireEvent.click(screen.getByText("Open Modal"));
expect(screen.getByText("Modal Content")).toBeInTheDocument();

fireEvent.mouseDown(document.body);
expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
```

#### Testing Redux Thunk Logic

##### Q: How do you test async Redux actions with thunks?

Answer:

- Mock dispatch, getState, and return the thunk:

```js
await myThunk(payload)(mockDispatch, mockGetState, undefined);
expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
```

- Use redux-mock-store or msw for mocking API layers.

#### Test with MemoryRouter Without a Real Route

##### Q: You have no real route file, but you want to test navigation. How?

Answer:

```js
render(
  <MemoryRouter>
    <Component />
  </MemoryRouter>
);
```

- Use initialEntries to simulate different paths.

#### Skipping Tests Conditionally

##### Q: A feature is behind a feature flag. How do you skip or conditionally run the test?

Answer:

```js

if (FEATURE_ENABLED) {
test("runs only if flag enabled", () => { ... });
}
```

Or skip dynamically:

```js
test.skip("test title", () => {});
```

#### Asserting Network Request Body

##### Q: You want to confirm that a POST API was sent with the right payload. How?

Answer:
Use fetch-mock or axios-mock-adapter:

```js
expect(mockFetch).toHaveBeenCalledWith(
  expect.anything(),
  expect.objectContaining({
    body: JSON.stringify({ userId: 123 }),
  })
);
```

#### Testing Component That Uses IntersectionObserver

##### Q: You use IntersectionObserver to lazy-load components. How to test it?

Answer:
Mock IntersectionObserver:

```js
global.IntersectionObserver = class {
  observe() {}
  disconnect() {}
};
```

Trigger manual logic instead of waiting for visibility.

#### Debugging Memory Leaks in Component Tests

##### Q: A test is causing "state update on unmounted component". How to fix?

Answer:

- Cleanup timers or API calls in useEffect return
- Use jest.clearAllTimers() and jest.useFakeTimers() if needed
- Mock long-running effects properly

#### Validate Event Bubbling in Component

##### Q: How do you test that a child click bubbles to the parent handler?

Answer:
Spy on both handlers:

```js
fireEvent.click(screen.getByText("Child Button"));
expect(parentHandler).toHaveBeenCalled();
expect(childHandler).toHaveBeenCalled();
```

- Use stopPropagation() to simulate prevention.

#### Mocking File Uploads in Tests

##### Q: You want to test file input submission. How?

Answer:

```js
const file = new File(["hello"], "hello.png", { type: "image/png" });
fireEvent.change(screen.getByTestId("file-input"), {
  target: { files: [file] },
});
expect(screen.getByText("hello.png")).toBeInTheDocument();
```

#### Testing Toast or Notification UI

##### Q: You show a toast on success. How to test it appears and disappears?

Answer:

```js
fireEvent.click(screen.getByText("Submit"));
expect(await screen.findByText("Success")).toBeInTheDocument();

await waitFor(() =>
  expect(screen.queryByText("Success")).not.toBeInTheDocument()
);
```

#### Debugging Inconsistent Random Behavior

##### Q: Your test fails sometimes due to random values. How to fix?

Answer:

Mock randomness using jest.spyOn(Math, 'random')

Or inject seedable randomness into logic

#### Testing API Error Boundaries

##### Q: How do you test UI when an API returns a 500 error?

Answer:

- Mock fetch/axios to reject or return 500
- Assert fallback UI or error component is shown

#### Simulating Drag and Drop

##### Q: You want to test drag-and-drop logic in React. How?

Answer:
Simulate dragStart, dragEnter, drop manually:

```js
fireEvent.dragStart(dragItem);
fireEvent.drop(dropTarget);
expect(screen.getByText("Moved")).toBeInTheDocument();
```

#### Bypassing Time-Based Tests in CI

##### Q: Your component renders based on new Date(). How do you test this?

Answer:

```js
jest.useFakeTimers().setSystemTime(new Date("2024-01-01"));
```

Or use dependency injection to pass a mock date.

#### Testing Scroll Behavior

##### Q: How do you test if an element is scrolled into view?

Answer:

```js
element.scrollIntoView = jest.fn();
fireEvent.click(button);
expect(element.scrollIntoView).toHaveBeenCalled();
```

#### Testing Custom Hook Directly

##### Q: You created useFormHandler(). How do you test it directly?

Answer:
Use @testing-library/react-hooks or manually test it inside a dummy component.

#### Detecting Leaking Test State Between Tests

##### Q: A test passes in isolation but fails when run with others. Why?

Answer:

- Shared mock state (mockReset() missing)
- DOM not cleaned properly (cleanup() not running)
- Variables reused across tests

#### Asserting Component Was Unmounted

##### Q: You want to test that cleanup ran on component unmount. How?

Answer:
Use a spy inside useEffect return:

```js
const cleanupSpy = jest.fn();
useEffect(() => () => cleanupSpy(), []);
Assert: expect(cleanupSpy).toHaveBeenCalled();
```

#### Debugging Infinite Updates in Strict Mode

##### Q: Your component keeps running twice in dev but not in prod. Why?

Answer:
React 18 Strict Mode intentionally double-invokes functions to catch side effects.
Wrap effects in guards like:

```js
useEffect(() => {
let mounted = true;
if (mounted) { ... }
return () => { mounted = false; };
}, []);
```

### 🔷 Category: Custom Hooks & Reusability

#### 101. Extracting Reusable Logic from Multiple Components

##### Q: You have 3 components using similar pagination logic. How do you extract this into a reusable hook?

Answer:
Create a custom hook:

```js
function usePagination(data, itemsPerPage) {
const [currentPage, setPage] = useState(1);
const totalPages = Math.ceil(data.length / itemsPerPage);
const currentItems = useMemo(() => {
return data.slice((currentPage - 1) _ itemsPerPage, currentPage _ itemsPerPage);
}, [data, currentPage]);

return { currentItems, currentPage, setPage, totalPages };
}
```

Use this in any component to avoid duplicating logic.

#### 102. Hook That Tracks Window Size

##### Q: You want a hook that tells you current window width and height. How would you create it?

Answer:

```js
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
```

#### 103. Sharing Fetch Logic Across Components

##### Q: Multiple components make API calls and track loading/error/success. How do you reuse this?

Answer:

Create a generic useFetch hook:

```js
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
```

#### 104. Building a Custom useForm Hook

##### Q: How would you create a reusable hook to manage input field state and validation?

Answer:

```js
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return { values, handleChange };
}
```

#### 105. Hook With Cleanup Logic

##### Q: You want a hook to track WebSocket connections. How do you handle connection and cleanup?

Answer:

```js
function useWebSocket(url) {
  useEffect(() => {
    const socket = new WebSocket(url);
    socket.onopen = () => console.log("Connected");
    return () => socket.close(); // cleanup
  }, [url]);
}
```

#### 106. Custom Hook with a Dependency Array Issue

##### Q: A hook causes unnecessary reruns on every render. Why? How to fix?

Answer:
Dependencies like functions or objects are re-created every render. Use useCallback or useMemo:

```js
const stableCallback = useCallback(() => { ... }, []);
```

Or extract logic outside component if it’s static.

#### 107. Hook With LocalStorage Sync

##### Q: You want a hook that persists and retrieves a value from localStorage. How?

Answer:

```js
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```

#### 108. Hook With Debounced State

##### Q: You want to debounce user input inside a hook. What’s your approach?

Answer:

```js
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}
```

#### 109. Custom Hook That Returns a Ref

##### Q: You need a hook that returns a ref and detects when it's visible. How would you build it?

Answer:

```js
function useOnScreen(ref) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting)
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}
```

#### 110. Sharing Validation Logic in a Custom Hook

##### Q: How do you centralize and reuse validation across forms?

Answer:

- Write a useValidation() hook that takes a schema (like Yup or Zod)
- It can return field-level or form-level errors
- Use this logic inside reusable useForm() or individual inputs

### 🔷 Category: Accessibility & a11y Testing in React

#### 111. Accessible Form Labels

##### Q: Your form inputs don't announce labels in screen readers. How do you fix this?

Answer:
Use <label htmlFor="inputId"> and match it to the input’s id. Alternatively, use aria-label or aria-labelledby if a visible label isn't appropriate.

#### 112. Keyboard Navigation Fails in Custom Modal

##### Q: Your modal can't be closed with the Escape key or navigated via Tab. What’s missing?

###### Answer: Implement:

- onKeyDown handler for Escape key
- Focus trap: keep focus within modal
- Restore focus to the trigger element on close
- Libraries like focus-trap-react or react-aria can help.

#### 113. Button Looks Clickable But Isn’t Keyboard Accessible

##### Q: You styled a <div> like a button. It looks clickable but doesn't respond to Enter/Space. Fix?

###### Answer: Use a real <button> or add:

- role="button"
- tabIndex={0}
- Key handling for Enter and Space
- But prefer semantic HTML.

#### 114. Color Contrast Issue Detected by Lighthouse

##### Q: Lighthouse flags low color contrast in your design. How do you debug?

Answer:

- Use DevTools' Accessibility tab or WebAIM Contrast Checker. Ensure contrast ratio is:
  - 4.5:1 for normal text
  - 3:1 for large/bold text

#### 115. Screen Reader Doesn’t Read Alert Messages

##### Q: Your alert appears on screen but is ignored by screen readers. Fix?

Answer:
Wrap it in:

```html
<div role="alert">Error occurred</div>
```

This ensures it’s announced immediately. Can also use aria-live="polite" or assertive.

#### 116. Testing a11y With React Testing Library

##### Q: How do you test whether an element is accessible by label?

Answer:

```js
expect(screen.getByLabelText("Username")).toBeInTheDocument();
```

- Use getByRole, getByText, getByLabelText, and avoid getByTestId unless necessary.

#### 117. Skipping to Main Content Link

##### Q: How do you implement a "Skip to main content" link?

Answer:
Add a hidden anchor at the top:

```html
<a href="#main" className="sr-only focus:not-sr-only">Skip to main</a>

<main id="main">...</main>
```

This improves keyboard navigation for screen reader users.

#### 118. Validating ARIA Attributes

##### Q: You added ARIA labels, but something seems off. How do you validate them?

Answer: Use tools like:

- axe DevTools
- eslint-plugin-jsx-a11y
- Chrome’s Lighthouse

They catch misused roles, missing labels, etc.

#### 119. Missing Focus Indicator

##### Q: A button doesn’t show any outline when focused with Tab. What’s wrong?

Answer:

- ###### Check if outline:
  - none is applied via CSS. To fix:
- ###### Remove the override or add a custom visible focus style like:

```css
button:focus-visible {
  outline: 2px solid #1976d2;
}
```

#### 120. Announcing Route Change in SPA

##### Q: After navigation in your React SPA, screen readers don’t know the page changed. Solution?

###### A:Use a visually hidden live region:

```js
<div aria-live="polite" style={{ position: "absolute", left: "-9999px" }}>
  Page changed to {routeName}
</div>
```

- Update it on route change using useEffect.

### 🔷 Category: Rendering Strategies (SSR, SSG, CSR, ISR) in React & Next.js

#### 121. Choosing Between SSR and CSR

#####Q: You’re building a fintech dashboard showing user-specific data. Would you choose SSR or CSR?

Answer:

- CSR (Client-Side Rendering) is better for personalized dashboards:
- Keeps data secure (no HTML pre-rendered with user data)
- Reduces server load
- Faster interactions after initial load

#### 122. SEO-Friendly Landing Page — Which Strategy?

##### Q: You need a marketing homepage with fast load time and good SEO. SSR or SSG?

Answer:

- SSG (Static Site Generation) is ideal:
  - Pre-renders HTML at build time
  - Extremely fast
  - Perfect for public content that rarely changes

#### 123. API Data Is Fresh Every Minute

##### Q: A blog shows external data that updates every minute. What rendering strategy do you use?

Answer:

- ISR (Incremental Static Regeneration) with revalidate: 60 is best:

  - Combines performance of SSG

    - Regenerates in background every 60s

```ts

export async function getStaticProps() {
return { props: { ... }, revalidate: 60 };
}
```

#### 124. User Data Not Available at Build Time

##### Q: You want to pre-render profile pages but don’t have user data during build. Which strategy?

Answer:
Use SSR or fallback true in getStaticPaths() for dynamic SSG.

#### 125. Real-Time Stock Data in Page

##### Q: You need to show live prices on a stock page. Can you use SSR?

Answer:

- No, SSR renders only once per request. For real-time updates:
- Use CSR + WebSockets or polling
- Or load static shell with SSG, hydrate with CSR

#### 126. Next.js SSR Component and Flash of Empty Content

##### Q: You use SSR but still see flash of empty content on load. Why?

Answer:

- Component may rely on client-only APIs (e.g., window, localStorage)
- Use useEffect to defer client logic
- Or check hydration mismatch warnings

#### 127. Fetching Data with getServerSideProps

##### Q: In Next.js, how does getServerSideProps differ from getStaticProps?

Answer:

- getServerSideProps runs on every request
- getStaticProps runs at build time or on a timer (ISR)

#### 128. Combining SSR and CSR on a Page

##### Q: Can you pre-render some data and hydrate the rest with client-only fetches?

Answer:
Yes. Example:

- Use getServerSideProps to pre-render base data
- Fetch user-specific data client-side in useEffect

#### 129. SSG Page Not Updating After Data Change

##### Q: A statically generated product page doesn’t show latest stock count. Why?

Answer:

- Likely uses getStaticProps without revalidate
- Add revalidate key for ISR, or switch to getServerSideProps

#### 130. Real-World Trade-Off: SSR vs CSR in Fintech

##### Q: In a fintech app, when would SSR be a performance bottleneck?

###### A: SSR can slow things down if:

- Every user request hits the server
- Personal data requires API calls for each user
- Prefer CSR for personalized UIs, SSR for public pages like statements, FAQs, or KYC onboarding.

### 🔷 React Query Interview Questions & Detailed Answers

##### 1. How would you fetch and cache user data using React Query?

Answer:

Use the useQuery hook:

```ts
import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  const res = await fetch("/api/user");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const { data, isLoading, isError } = useQuery(["user"], fetchUser);
```

✅ This:

    - Caches the result under the ['user'] key

    - Prevents refetching unless stale

    - Automatically refetches when window regains focus (by default)

##### 2. What’s the difference between staleTime and cacheTime?

Answer:
Term Purpose

- staleTime Time (ms) during which data is considered fresh
- cacheTime Time (ms) to keep unused query in memory after unmount

Example:

```ts
useQuery(["user"], fetchUser, {
  staleTime: 10000, // won’t refetch for 10s
  cacheTime: 300000, // cache stays in memory for 5 mins after component unmount
});
```

##### 3. How do you fetch data only on button click instead of automatically?

Answer:

Disable automatic execution using enabled: false, then call refetch() manually:

```ts
const { refetch, data, isFetching } = useQuery(["user"], fetchUser, {
  enabled: false,
});

return <button onClick={() => refetch()}>Load User</button>;
```

✅ Use case: on-demand fetch, lazy loading, or gated access

##### 4. You need to fetch transaction data only after the user profile is loaded. How do you structure this?

Answer:

Use dependent queries:

```ts
Copy;
Edit;
const { data: user } = useQuery(["user"], fetchUser);

const { data: txns } = useQuery(
  ["transactions", user?.id],
  () => fetchTxns(user.id),
  {
    enabled: !!user,
  }
);
```

💡 enabled: !!user ensures the second query runs only when user is available.

##### 5. How do you implement pagination using useQuery?

Answer:

Use queryFn with a page parameter:

```ts
const fetchPage = (page) =>
  fetch(`/api/posts?page=${page}`).then((res) => res.json());

const { data, isFetching } = useQuery(["posts", page], () => fetchPage(page));
```

The query key must include page to cache per-page data

You can implement Next/Prev buttons using a page state in the component

##### 6. Describe how to implement infinite scrolling using useInfiniteQuery.

Answer:

Use useInfiniteQuery with a cursor or page param:

```tsx
const fetchPosts = ({ pageParam = 1 }) =>
  fetch(`/api/posts?page=${pageParam}`).then((res) => res.json());

const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
  useInfiniteQuery(["posts"], fetchPosts, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.hasMore ? pages.length + 1 : undefined;
    },
  });
```

Use fetchNextPage() when user reaches the bottom.

##### 7. How would you implement an optimistic UI update when liking a post?

Answer:

Use useMutation with onMutate, onError, and onSettled:

```tsx
const mutation = useMutation(likePost, {
  onMutate: async (postId) => {
    await queryClient.cancelQueries(["posts"]);
    const previous = queryClient.getQueryData(["posts"]);

    queryClient.setQueryData(["posts"], (old) =>
      old.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );

    return { previous };
  },
  onError: (err, variables, context) => {
    queryClient.setQueryData(["posts"], context.previous);
  },
  onSettled: () => {
    queryClient.invalidateQueries(["posts"]);
  },
});
```

✅ Optimistic updates make the app feel faster by updating the UI before the server responds.

##### 8. How do you display a fallback UI or toast when a mutation fails?

Answer:

```tsx
useMutation(updateUser, {
  onError: (error) => {
    toast.error("Update failed: " + error.message);
  },
});
```

You can also check isError and render fallback components.

##### 9. Two components fetch the same query. How do you prevent duplicate network calls?

Answer:

React Query de-duplicates requests by default if:

Query key is the same

Query function is the same

```ts
useQuery(["user"], fetchUser);
```

✅ Both components will share the cached result, avoiding duplicate network calls.

##### 10. What are the best practices for defining unique and cacheable query keys?

    Answer:

Use arrays for query keys:

```ts
["transactions", userId][("posts", { category: "tech", page: 2 })];
```

###### This:

- Avoids string key collisions
- Allows granular cache invalidation
- Enables React Query to understand dependencies
- Avoid dynamic strings like: "user-" + userId — they're harder to manage.

##### 11. A component unmounts during a long API call. How do you cancel the request?

    Answer:

Use AbortController inside your fetch function:

```ts
const fetchData = async ({ signal }) => {
  const controller = new AbortController();
  const response = await fetch("/api/data", { signal: controller.signal });
  return response.json();
};

useQuery(["data"], fetchData, {
  queryFn: ({ signal }) => fetchData({ signal }),
});
```

✅ React Query automatically passes an AbortSignal for cancellation. Your fetch must support it.

##### 12. How would you handle retry logic if an API fails due to a temporary network error?

Answer:

React Query supports retries out of the box:

```ts
useQuery(['user'], fetchUser, {
retry: 3,
retryDelay: attemptIndex => Math.min(1000 \* 2 \*\* attemptIndex, 30000),
});
```

✅ Use this for transient errors. You can also customize retry behavior based on error type.

##### 13. How do you ensure a query refreshes when the user returns to the browser tab?

    Answer:

React Query automatically does this by default:

```ts
useQuery(["user"], fetchUser, {
  refetchOnWindowFocus: true, // default
});
```

Set it to false to prevent this in cases like sensitive APIs or analytics.

##### 14. You updated a user profile. How do you ensure other user-related queries are refetched?

Answer:

Invalidate related queries using queryClient.invalidateQueries after mutation:

```ts
const queryClient = useQueryClient();

useMutation(updateProfile, {
  onSuccess: () => {
    queryClient.invalidateQueries(["user"]);
    queryClient.invalidateQueries(["transactions"]);
  },
});
```

✅ This ensures related views reflect the updated state.

##### 15. How would you fetch categories, products, and banners simultaneously?

    Answer:

Use useQueries for parallel requests:

```ts
const results = useQueries({
  queries: [
    { queryKey: ["categories"], queryFn: fetchCategories },
    { queryKey: ["products"], queryFn: fetchProducts },
    { queryKey: ["banners"], queryFn: fetchBanners },
  ],
});
```

✅ Use this when the queries are independent, not dependent.

##### 16. Your app makes hundreds of queries. How do you prevent performance bottlenecks?

###### Answer: Best practices:

- Use staleTime to reduce refetching frequency
- Use pagination or infinite queries for large data sets
- Limit auto-refetching (refetchOnMount, refetchOnWindowFocus)
- Memoize query keys and avoid duplicate queries
- Avoid enabled: true on too many queries simultaneously
  ✅ Also profile using DevTools or React Query Devtools

##### 17. What kind of data would you keep in React Query vs Redux/Zustand?

Answer:

##### Type of Data Best Managed By

| Server state (API)  | ✅ React Query               |
| :------------------ | :--------------------------- |
| UI state (modals)   | ✅ Redux / Zustand / Context |
| Auth tokens         | ✅ Zustand / Context         |
| Forms / local input | ✅ Local component state     |

- React Query is for remote, async server state. Redux/Zustand is for client UI logic.

##### 18. How do you prefetch React Query data for SSR in Next.js?

    Answer:

Use Hydrate and dehydrate from @tanstack/react-query:

```ts
export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["user"], fetchUser);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
```

In \_app.tsx, wrap your app in <Hydrate> using the prop above.

##### 19. A component using a query re-renders too often. How do you optimize it?

Answer:

- Use select to return only needed data (instead of the full object)
- Use React.memo() for component
- Avoid anonymous functions in props
- Debounce search/fetch queries where needed

```ts
useQuery(["user"], fetchUser, {
  select: (data) => data.name, // only track changes to name
});
```

##### 20. How can you transform or filter the query result inside useQuery?

###### Answer: Use the select option:

```ts
useQuery(["transactions"], fetchTxns, {
  select: (data) => data.filter((txn) => txn.status === "pending"),
});
```

✅ This ensures the component only re-renders when the transformed result changes.

### 🔷 20 Scenario-Based Interview Questions on SWR / Data Fetching & Caching Strategies

##### 1. What is SWR and how is it different from React Query?

###### Answer: SWR (Stale-While-Revalidate) is a React Hooks library by Vercel that focuses on:

- Simpler data fetching
- Minimal API (focused mostly on GET requests)
- Built-in caching, deduplication, and revalidation
- Great for static + dynamic hybrid use cases (e.g., Next.js)

###### React Query supports:

- Mutations (POST/PUT)
- More advanced options (pagination, optimistic updates)
- Better suited for apps with heavy server state interactions

##### 2. How do you implement basic data fetching using SWR?

###### Answer:

```tsx
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const { data, error, isLoading } = useSWR("/api/user", fetcher);
```

✅ This automatically:

- Caches the response
- Revalidates on focus or reconnect
- Shares result between components using the same key

##### 3. How do you prevent automatic revalidation in SWR?

Answer:

Disable revalidation using options:

```ts
useSWR("/api/user", fetcher, {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
});
```

✅ Useful for static or rarely-changing data

##### 4. How would you refresh the SWR cache manually after updating data?

Answer:

Use mutate():

```tsx
import { mutate } from "swr";

await updateUser(data); // mutation
mutate("/api/user"); // revalidate after update
```

✅ You can also use:

```ts
mutate("/api/user", newData, false); // optimistic update without re-fetch
```

##### 5. How do you use SWR to fetch data conditionally (e.g., after login)?

Answer:

Use a falsy key to skip execution:

```tsx
const { data } = useSWR(isLoggedIn ? '/api/user' : null, fetcher);
✅ This prevents SWR from firing until the condition is met.
```

##### 6. How would you implement client-side pagination with SWR?

Answer:

Use dynamic keys:

```tsx
const fetcher = (url) => fetch(url).then((res) => res.json());
const { data } = useSWR(`/api/posts?page=${page}`, fetcher);
```

Maintain page in local state and update it to fetch the next set.

##### 7. How do you handle infinite scrolling using SWR?

Answer:

Use useSWRInfinite:

```tsx
const getKey = (pageIndex, prevData) => {
  if (!prevData?.hasMore) return null;
  return `/api/posts?page=${pageIndex + 1}`;
};

const { data, size, setSize } = useSWRInfinite(getKey, fetcher);
```

✅ Combine with intersection observers or scroll events.

##### 8. How would you implement optimistic UI with SWR?

Answer:

```tsx
const optimisticPost = { ...data, likes: data.likes + 1 };

mutate("/api/post/123", optimisticPost, false);
await likePost(); // real mutation
mutate("/api/post/123"); // revalidate
```

✅ Makes the UI responsive before the API confirms.

##### 9. How do you globally configure SWR fetch and caching behavior?

Answer:

###### Use SWRConfig

```tsx
<SWRConfig
  value={{
    fetcher: (url) => fetch(url).then((res) => res.json()),
    revalidateOnFocus: true,
    dedupingInterval: 5000,
  }}
>
  <App />
</SWRConfig>
```

✅ DRYs up your configuration across the app.

##### 10. How do you simulate staleTime in SWR?

Answer:

Use dedupingInterval and revalidateIfStale:

```tsx
useSWR("/api/data", fetcher, {
  dedupingInterval: 60000, // 1 min
  revalidateIfStale: false,
});
```

✅ Similar to React Query's staleTime.

##### 11. How can you preload data using SWR before a page navigates?

Answer:

Use mutate to pre-populate cache:

```ts
await mutate("/api/user", fetcher("/api/user"));
```

Useful in Next.js getServerSideProps() or onHover prefetching.

##### 12. How do you handle errors and show fallback UI in SWR?

Answer:

```tsx
const { data, error } = useSWR("/api/user", fetcher);

if (error) return <ErrorPage />;
if (!data) return <Spinner />;
return <Profile data={data} />;
```

✅ You can also add global error handling via onErrorRetry.

##### 13. How do you disable SWR caching completely for a fetch?

Answer:

Use dedupingInterval: 0 and disable cache updates:

```tsx
useSWR("/api/data", fetcher, {
  dedupingInterval: 0,
  revalidateOnMount: true,
  revalidateOnFocus: false,
});
```

##### 14. How do you deduplicate concurrent requests for the same key?

Answer:

SWR handles this automatically within the dedupingInterval.

✅ Multiple components using the same key share the request and result.

##### 15. How do you handle dependent queries in SWR?

Answer:

Use conditional keys:

```tsx
const { data: user } = useSWR("/api/user", fetcher);
const { data: txns } = useSWR(
  () => (user ? `/api/txns/${user.id}` : null),
  fetcher
);
```

✅ Prevents second call until user data is available.

##### 16. How do you perform a POST or mutation in SWR?

Answer:

SWR is designed for GET requests, but you can use mutate():

```ts
await fetch("/api/post", { method: "POST", body: JSON.stringify(payload) });
mutate("/api/posts"); // revalidate affected list
```

✅ For advanced mutation handling, use swr-mutation or pair with React Query.

##### 17. How do you test SWR data-fetching components?

Answer:

- Use msw to mock API responses
- Wrap test with SWRConfig to reset cache:

```tsx
<SWRConfig value={{ provider: () => new Map() }}>
  <Component />
</SWRConfig>
```

✅ This prevents cache leaks between tests.

##### 18. How do you handle background polling with SWR?

Answer:

```ts
useSWR("/api/data", fetcher, {
  refreshInterval: 10000, // 10s
  refreshWhenHidden: false,
});
```

✅ Useful for real-time dashboards or background updates.

19. What’s the best way to invalidate cached SWR data on logout?
    Answer:

Clear SWR cache globally:

```ts
import { cache } from "swr";

cache.clear();
```

✅ Also useful when switching users or clearing app state.

##### 20. When would you choose SWR over React Query in a real project?

Answer:

###### Use SWR when:

- Mostly fetching GET data
- You want minimal config

###### Using Next.js with SSG/ISR (SWR works great with prefetching + hydration)

###### Use React Query when:

- You need mutations, pagination, dependent queries
- Managing complex workflows (e.g. CRUD, form autosave)

### ✅ Part 1: Form Handling in React

1. How would you implement a controlled form in React and why is it preferred?
   Answer:

Controlled inputs are bound to component state via useState:

tsx
Copy
Edit
const [name, setName] = useState('');
<input value={name} onChange={e => setName(e.target.value)} />
✅ Benefits:

Easy validation

Sync with other state/UI

Better control over dynamic behavior (e.g., disabling submit)

2. When would you use uncontrolled components in a React form?
   Answer:

Use uncontrolled components when:

You need high performance with minimal re-renders

You just need to read values on submit using ref

Example:

tsx
Copy
Edit
const inputRef = useRef();
<input ref={inputRef} />
Uncontrolled inputs are best for large or static forms.

3. What are common ways to handle validation in React forms?
   Answer:

Manual validation (if (!email.includes('@')))

Schema-based validation (Yup, Zod)

Libraries:

React Hook Form + Yup

Formik + Yup

Native browser validation (required, pattern)

✅ Schema validation = reusable + testable

4. How would you conditionally disable a submit button until all fields are valid?
   Answer:

Using form library or manually track validation state:

tsx
Copy
Edit
const isValid = email && password.length > 5;
<button disabled={!isValid}>Submit</button>
With React Hook Form:

tsx
Copy
Edit
<button disabled={!formState.isValid}>Submit</button> 5. How would you manage a dynamic form with add/remove rows (e.g., multiple addresses)?
Answer:

Use array state:

tsx
Copy
Edit
const [addresses, setAddresses] = useState([{ city: '' }]);

const handleAdd = () => setAddresses([...addresses, { city: '' }]);
Libraries like React Hook Form support .append() and .remove() via useFieldArray.

##### How would you implement a controlled form in React and why is it preferred?

Answer:
A controlled component uses useState to manage input:

```jsx
const [value, setValue] = useState("");
<input value={value} onChange={(e) => setValue(e.target.value)} />;
```

✅ Preferred for full control, validation, and dynamic form handling.

🔢 2. When would you use uncontrolled components?
Answer:
Use when:

Performance is critical (avoids re-renders)

Form data is only needed on submit

Example:

jsx
Copy
Edit
const ref = useRef();

<form onSubmit={() => console.log(ref.current.value)}>
  <input ref={ref} />
</form>
🔢 3. What are pros/cons of Formik vs React Hook Form?
Feature	Formik	React Hook Form
Re-renders	More	Fewer (better perf)
Schema support	Yup	Yup/Zod/custom
Learning curve	Easy	Moderate
Complex forms	✅	✅

RHForm is faster and more scalable in large apps.

🔢 4. How would you validate email format without using a library?
jsx
Copy
Edit
const isValid = /\S+@\S+\.\S+/.test(email);
Add visual feedback based on isValid.

🔢 5. How do you prevent form submission if required fields are missing?
Answer:
Disable the submit button or prevent submit on validation failure:

jsx
Copy
Edit

<form onSubmit={(e) => {
  if (!name) {
    e.preventDefault();
    alert('Name is required');
  }
}}>
🔢 6. How to show per-field error messages in a React form?
Answer:

Track an errors object:

jsx
Copy
Edit
{errors.email && <p>{errors.email}</p>}
With libraries like RHForm:

jsx
Copy
Edit
{formState.errors.email?.message}
🔢 7. How would you handle multi-step forms?
Answer:

Maintain a step state

Use one state object to hold values for all steps

Optional: Use Context or Zustand for shared state

jsx
Copy
Edit
const [step, setStep] = useState(1);
const [formData, setFormData] = useState({});
🔢 8. How do you prefill a form with API data?
Answer:

Fetch data in useEffect

Use setValue in form library or useState manually

jsx
Copy
Edit
useEffect(() => {
setValue('email', user.email);
}, [user]);
🔢 9. How would you implement dynamic field rendering (e.g., "Other" input if selected)?
Answer:

Use conditional JSX:

jsx
Copy
Edit
{formData.choice === 'Other' && (
<input type="text" value={formData.otherInput} />
)}
🔢 10. How would you persist form data in localStorage?
Answer:

jsx
Copy
Edit
useEffect(() => {
localStorage.setItem('form', JSON.stringify(formData));
}, [formData]);
On load:

jsx
Copy
Edit
useEffect(() => {
const saved = localStorage.getItem('form');
if (saved) setFormData(JSON.parse(saved));
}, []);
🔢 11. What’s the best way to build reusable input components?
Answer:

Encapsulate value, onChange, and error display:

jsx
Copy
Edit
const TextInput = ({ label, register, error }) => (
<>
<label>{label}</label>
<input {...register(label)} />
{error && <span>{error.message}</span>}
</>
);
🔢 12. How do you handle file uploads in a form?
Answer:

Use FormData for submission:

jsx
Copy
Edit
const formData = new FormData();
formData.append('file', fileInput.current.files[0]);

fetch('/upload', { method: 'POST', body: formData });
🔢 13. How do you debounce input validation in real-time search forms?
Answer:

Use setTimeout inside useEffect or a library like lodash.debounce.

jsx
Copy
Edit
useEffect(() => {
const handler = setTimeout(() => validate(value), 300);
return () => clearTimeout(handler);
}, [value]);
🔢 14. How do you handle form reset?
Answer:

Use:

reset() in React Hook Form

setFormData(initialValues) manually

🔢 15. How would you show a loading spinner on form submission?
Answer:

jsx
Copy
Edit
const [isSubmitting, setSubmitting] = useState(false);

<form onSubmit={async () => {
  setSubmitting(true);
  await submit();
  setSubmitting(false);
}}>
  {isSubmitting && <Spinner />}
</form>
🔢 16. How do you test a form with React Testing Library?
Answer:

Use fireEvent or userEvent to simulate typing

Use getByLabelText, getByRole, getByText to access fields

js
Copy
Edit
fireEvent.change(getByLabelText(/email/i), {
target: { value: 'test@example.com' }
});
🔢 17. How would you conditionally require a field?
Answer:

Use validation schema like:

js
Copy
Edit
Yup.object({
phone: Yup.string().when('country', {
is: 'India',
then: Yup.string().required(),
})
})
🔢 18. How do you handle validation across dependent fields (e.g., confirm password)?
Answer:

In Yup:

js
Copy
Edit
Yup.string().oneOf([Yup.ref('password')], 'Passwords must match')
🔢 19. How do you improve performance of a large form?
Answer:

Use React Hook Form (minimal re-renders)

Split into steps or tabs

Debounce API checks

Use React.memo on custom fields

🔢 20. How do you handle server-side validation errors (e.g., “Email already taken”)?
Answer:

Submit form

On response, update errors state

jsx
Copy
Edit
setError('email', { message: 'Email already exists' });
✅ With RHF: setError('email', { type: 'manual', message: 'Already taken' })

### ⚡️ Performance Optimization in React

##### 1. What causes unnecessary re-renders in React, and how do you avoid them?

Answer:

###### Re-renders happen when:

- Props or state change
- Functions/objects are recreated on every render

###### ✅ Solutions:

- Use React.memo for components
- Memoize functions with useCallback
- Use useMemo for computed values

##### 2. When should you use React.memo()?

Answer:

###### Use it when:

- Component re-renders often with the same props
- Props are primitive or stable references
  Example:

```js
const ExpensiveComponent = React.memo((props) => { ... });
```

##### 3. How does useMemo improve performance?

Answer:
It memoizes the result of a computation so it doesn't re-run unless dependencies change.

```js
const sortedList = useMemo(() => sort(list), [list]);
```

✅ Useful for expensive calculations.

🔢 4. What is the difference between useMemo and useCallback?
Hook Purpose
useMemo Caches computed value
useCallback Caches function reference

🔢 5. How do you optimize rendering of large lists?
Answer:

Use react-window or react-virtualized for virtualization

Only render visible items

Memoize row components

🔢 6. What is virtualization and why is it useful?
Answer:
Virtualization renders only what is visible in the viewport, reducing DOM nodes and improving performance.

Libraries:

react-window

react-virtualized

🔢 7. How do you handle performance issues with frequent input changes (e.g., live search)?
Answer:

Debounce the input

Use useTransition (React 18) for deferred updates

🔢 8. What is useTransition and how does it help?
Answer:
It allows non-blocking UI updates for transitions:

js
Copy
Edit
const [isPending, startTransition] = useTransition();

startTransition(() => {
setFilter(query);
});
✅ Improves responsiveness.

🔢 9. How do you memoize expensive computations in class components?
Answer:
Use instance properties or shouldComponentUpdate.

js
Copy
Edit
shouldComponentUpdate(nextProps) {
return nextProps.value !== this.props.value;
}
🔢 10. How would you reduce bundle size in a React app?
Answer:

Code splitting with React.lazy

Tree-shaking unused imports

Use dynamic imports

Avoid large libraries (e.g., moment.js → date-fns)

🔢 11. What is code splitting, and how do you implement it?
Answer:

Split code by route or component:

js
Copy
Edit
const LazyPage = React.lazy(() => import('./Page'));
Load with Suspense:

js
Copy
Edit
<Suspense fallback={<Spinner />}><LazyPage /></Suspense>
🔢 12. How can you analyze React app performance?
Answer:

Chrome DevTools Performance tab

React DevTools → Profiler

Lighthouse audit

Bundle Analyzer

🔢 13. What are render props, and how do they affect performance?
Answer:
Render props create new functions every render.
✅ Optimize using useCallback or convert to hooks to avoid re-renders.

🔢 14. How do you prevent re-renders in child components?
Answer:

Use React.memo

Memoize callback props

Avoid inline functions/objects in props

🔢 15. How does context API affect performance?
Answer:

Any context value change re-renders all consumers.
✅ Solution: split context or use selectors like use-context-selector.

🔢 16. How would you handle slow API calls affecting UI?
Answer:

Show skeleton loaders or spinners

Use SWR/React Query for background updates

useTransition for deferred state

🔢 17. How does React batch updates, and when does it fail?
Answer:
React batches state updates inside event handlers but not always in setTimeout.

Use:

js
Copy
Edit
import { flushSync } from 'react-dom';
flushSync(() => setState());
🔢 18. How do you lazy load components only when needed?
Answer:
Use React.lazy + Suspense, or dynamic import with conditions:

js
Copy
Edit
if (showChart) {
import('./Chart').then(...);
}
🔢 19. How do you optimize image-heavy React apps?
Answer:

Lazy load images (loading="lazy")

Compress assets

Use srcset for responsive images

CDN hosting

🔢 20. How do you optimize React performance in mobile browsers?
Answer:

Avoid unnecessary animations/transitions

Reduce reflows (avoid inline styles)

Reduce JS bundle size

Use requestIdleCallback or IntersectionObserver for lazy content

🔢 21. What is the purpose of the key prop, and how can it affect performance?
Answer:
key helps React identify which items changed in a list.
Incorrect keys (e.g., array index) can cause unnecessary re-renders or lost input focus.

✅ Use unique, stable keys like IDs.

🔢 22. How do you memoize API responses to prevent duplicate network requests?
Answer:

Use SWR, React Query, or useMemo for local memoization.

Store fetched data in global state to reuse.

🔢 23. What’s the performance impact of rendering large tables and how can you handle it?
Answer:
Large DOMs hurt render performance.
Solutions:

Use virtualization (react-window)

Pagination

Collapse unused sections

🔢 24. When should you avoid using inline functions or objects in JSX?
Answer:
Inline functions/objects create new references on every render, breaking memoization.

✅ Move them out or wrap in useCallback / useMemo.

🔢 25. What is prop drilling and how can it impact performance?
Answer:
Passing props deeply through many layers causes intermediate components to re-render.

✅ Solution:

Use Context or state libraries (Zustand, Redux Toolkit)

Use memoization on intermediate components

🔢 26. What are idle callbacks and how can they help performance?
Answer:
Use requestIdleCallback() to defer non-critical work (e.g., analytics, logs) until browser is idle.

🔢 27. How does concurrent mode improve performance?
Answer:

Enables interruptible rendering

Background state updates

startTransition() lets low-priority updates run smoothly

🔢 28. What is hydration mismatch and how does it affect SSR performance?
Answer:
When server-rendered HTML doesn't match client-rendered React, React re-renders entire tree = performance hit.

✅ Ensure same rendering logic on both sides.

🔢 29. How does lazy loading routes affect performance?
Answer:
Improves initial load time by splitting bundles per route.
Use React.lazy + Suspense or code splitting tools like loadable-components.

🔢 30. What is tree shaking and how does it optimize performance?
Answer:
Removes unused code during build time.
✅ Ensure:

ES modules (import/export)

Avoid wildcard imports (e.g., import \* as \_)

🔢 31. How can you reduce layout thrashing in React apps?
Answer:
Avoid reading + writing DOM styles in the same frame.
Batch DOM reads/writes.
Use requestAnimationFrame wisely.

🔢 32. How does using a global state store (like Redux) poorly affect performance?
Answer:

Entire connected components may re-render unnecessarily

Fix with selectors, memoized selectors (e.g., reselect)

🔢 33. What are memoized selectors and how do they help?
Answer:
They prevent recalculating derived data on unchanged state.

js
Copy
Edit
const selectItems = createSelector([state => state.items], items => items.filter(...));
🔢 34. When do you choose Zustand or Recoil over Redux for performance?
Answer:

Fine-grained reactivity

Avoids context nesting

Selectors control re-renders better than Redux’s connect()

🔢 35. What’s the impact of excessive DOM nodes?
Answer:

Slower renders

Higher memory usage
✅ Keep DOM shallow, avoid unnecessary wrappers or deeply nested layouts.

🔢 36. How would you profile React performance in a live app?
Answer:

Chrome Profiler tab (JS & layout times)

React DevTools profiler (component-level)

Lighthouse for render blocking scripts

🔢 37. How does static asset caching improve performance?
Answer:
Cached JS, CSS, images reduce load times for returning users.
✅ Use long-term cache headers with hashed filenames.

🔢 38. How does the use of CSS-in-JS (e.g., Emotion, Styled-components) affect performance?
Answer:
Pros:

Scoped styles

Dynamic styling

Cons:

Runtime style parsing on every render (can slow large lists)

✅ Prefer static styles or compile-time solutions (vanilla-extract, Tailwind).

🔢 39. How do you optimize forms with 50+ input fields?
Answer:

Use React Hook Form (controlled by refs)

Render only visible sections

Split into step-by-step flow

Avoid wrapping each field in useState

##### 40. How can suspense boundaries improve rendering performance?

Answer:
They let parts of the app load independently.
Avoid blocking the full UI during lazy component loading:

```jsx
<Suspense fallback={<Skeleton />}>
  <HeavyComponent />
</Suspense>
```

### 🔐 React Security

#### ✅ Authentication & Token Handling

#### ✅ Authorization & Access Control

#### ✅ Protected Routes & Frontend Protections

#### ✅ General Security Best Practices (XSS, CSP, vulnerabilities)

#### 🔒 1. Authentication & Token Handling

##### 1. How would you implement login in a React app securely?

Answer:

- Send credentials via HTTPS to backend
- Backend returns an HttpOnly cookie (preferred) or token
- Avoid storing tokens in localStorage

##### 2. Where should you store JWT tokens in a React app?

Answer:

- ###### Best: HttpOnly Secure Cookies (prevents XSS)
- ###### Fallback: memory (reset on refresh)
- ###### Avoid: localStorage or sessionStorage (susceptible to XSS)

##### 3. What are the security risks of storing tokens in localStorage?

Answer:

- Susceptible to XSS attacks
- Tokens can be stolen if malicious script runs in browser context

##### 4. What’s the difference between session-based and token-based auth?

Answer:

###### Type Description

- Session Server holds auth state (e.g., cookie-based)
- Token Client stores and sends JWT on each request

##### 5. How do you renew expired tokens securely in React?

Answer:

- Use refresh token rotation via HttpOnly cookies
- Detect token expiry and auto-refresh silently in background
- Avoid exposing refresh tokens to JS

##### 6. How do you handle token expiration mid-session?

Answer:

- Detect 401 errors
- Call refresh token endpoint
- Retry original request

##### 7. What is CSRF and how do you prevent it?

Answer:

- ###### CSRF = attacker forces logged-in user to perform unwanted actions

###### Prevention:

- Use SameSite=Strict or Lax on cookies
- CSRF token headers (if needed)

##### 8. What headers should be sent with secure login requests?

Answer:

- Content-Type: application/json
- X-CSRF-Token (if using CSRF protection)
- Authorization: Bearer <token> (if applicable)

##### 9. How do you logout a user securely?

Answer:

- Clear HttpOnly cookie on server
- Invalidate token on backend
- Redirect to login

##### 10. How can you prevent login brute-force attacks?

Answer:

- Backend rate-limiting
- CAPTCHA on frontend after multiple attempts
- Lock account after N failed tries (e.g., 5)

#### 🔐 2. Authorization & Access Control

##### 11. What’s the difference between authentication and authorization?

Answer:

###### Term Meaning

- Authentication Verifying identity (login)
- Authorization Verifying permissions (access)

##### 12. How do you restrict access to certain features for specific roles?

Answer:

- On login, backend sends user roles/permissions
- Store them in context or Redux
- Use conditional rendering:

```tsx
{
  user.role === "admin" && <AdminPanel />;
}
```

##### 13. How would you implement RBAC (Role-Based Access Control)?

Answer:

- Assign roles like admin, editor, user
- Protect components/routes by role

```tsx
const canEdit = roles.includes("editor");
```

##### 14. How would you enforce field-level permission (e.g., can see but not edit)?

Answer:

```tsx
<input disabled={!user.permissions.includes("canEdit")} />
```

Or hide entire controls based on permission.

##### 15. How do you handle permissions on backend vs frontend?

Answer:

- Backend is source of truth for security
- Frontend does UX-level access control (hide/show)
- Backend must re-validate roles for all sensitive actions

##### 16. What are potential issues with client-only authorization checks?

Answer:
Can be bypassed by modifying frontend
✅ Always enforce checks on backend too.

##### 17. How would you share auth roles/claims with components?

Answer:

- Context API
- Redux or Zustand
- Hooks like useAuth()

##### 18. How do you prevent horizontal privilege escalation?

Answer:

- Always check userId on backend
- Don't trust frontend to provide secure identifiers

##### 19. How would you manage access for multi-tenant apps?

Answer:

- Validate tenant ID from URL or token
- Ensure data access is scoped to tenant

##### 20. How would you audit access control in frontend apps?

Answer:

- Use logging (e.g., attempted unauthorized component access)
- QA with different role-based test users
- **Optional:** Integrate feature flags for permission rollout

#### 🛡️ Section 3: Protected Routes & Frontend Protections

##### 21. How do you implement protected routes in React?

Answer:

Use a PrivateRoute wrapper that checks auth:

```tsx
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};
```

Wrap routes:

```tsx
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>
```

##### 22. How would you protect routes based on user roles?

Answer:

```tsx
const RoleRoute = ({ children, role }) => {
  const { user } = useAuth();
  return user?.roles.includes(role) ? (
    children
  ) : (
    <Navigate to="/unauthorized" />
  );
};
```

##### 23. How would you prevent route access if a user refreshes the page?

Answer:

- Persist auth state in memory or secure cookies
- Re-validate session on App load (useEffect)
- Optionally delay route rendering until auth status is known

##### 24. How do you prevent flash of unauthenticated content (FOUC)?

Answer:

- Use a loading state while validating auth
- Delay rendering of routes/components until user is confirmed

```tsx
if (authChecking) return <Spinner />;
```

##### 25. Can React Router alone protect routes? Why or why not?

Answer:

- ❌ No — it's only client-side UX protection.
- Always enforce route-level auth checks on the backend
- Anyone can inspect/modify frontend code

##### 26. How would you structure auth state globally?

Answer:

###### Via AuthContext:

```tsx
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);
```

- Optionally: use Zustand, Redux, or Recoil for shared state.

##### 27. How do you prevent protected route logic from leaking data through preloaded APIs?

Answer:

- Secure API endpoints on server
- Don’t preload data in public route trees unless user is verified

##### 28. How do you invalidate a user's session from frontend on token expiry?

Answer:

- Handle 401 errors from API
- Clear local state/token
- Redirect to /login

##### 29. How would you implement “remember me” functionality securely?

Answer:

- Use refresh tokens stored in HttpOnly cookies
- Short-lived access token stored in memory
- On page reload, use refresh token to generate a new access token

##### 30. How do you safely redirect users after login?

Answer:

- Only allow redirects to whitelisted routes
- Validate redirectTo query param:

```ts
const allowedRoutes = ["/dashboard", "/profile"];
if (!allowedRoutes.includes(redirectTo)) redirectTo = "/dashboard";
```

#### 🛡️ Section 4: General Security Best Practices

##### 31. What is XSS and how do you prevent it in React apps?

Answer:

###### XSS (Cross-site scripting) allows attackers to inject malicious scripts into your app.

###### ✅ Prevention:

- Never use dangerouslySetInnerHTML unless sanitized
- Escape untrusted input
- Use a library like DOMPurify when injecting HTML

##### 32. How does React help prevent XSS attacks by default?

Answer:
React escapes JSX and user-generated content automatically:

```tsx
<div>{userInput}</div> // escaped automatically
```

Only dangerouslySetInnerHTML is unsafe.

##### 33. How do you sanitize HTML content before rendering it in React?

Answer:
Use a library like DOMPurify:

```tsx
import DOMPurify from "dompurify";

<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }} />;
```

##### 34. What is a Content Security Policy (CSP), and how does it help?

Answer:
CSP is a browser header that controls what content can be loaded.

###### It prevents:

- Inline scripts
- Loading scripts from untrusted domains
  Example:

```pgsql
Content-Security-Policy: default-src 'self'; script-src 'self'
```

##### 35. What are the risks of using 3rd-party libraries in React apps?

Answer:

- May introduce vulnerable dependencies
- Can run arbitrary code (especially UI components)

###### ✅ Use:

- npm audit
- Dependency pinning
- Trusted packages only

##### 36. How do you validate and sanitize user input on the frontend?

Answer:

- Use schema validation (e.g., Yup, Zod)
- Escape dangerous characters before injecting into DOM
- Block script-like patterns with regex (additional layer)

##### 37. What are secure defaults in frontend development?

Answer:
Examples:

- Disable autocomplete for password fields
- Don’t expose stack traces in errors
- Use type="password" for sensitive inputs
- Use rel="noopener noreferrer" for external links

##### 38. What are best practices for error handling in a secure React app?

Answer:

- Don’t display technical errors to users
- Avoid leaking internal logic
- Use Error Boundaries + Sentry for logging
- Log minimal user data

##### 39. How do you secure file uploads in React forms?

Answer:

- Validate file type, size on frontend
- Double-validate on backend
- Never allow JS or HTML file uploads unless explicitly needed

##### 40. How do you prevent clickjacking in a React app?

Answer:

###### Set the following HTTP header:

```mathematica
  X-Frame-Options: DENY
```

or in modern CSP:

```css
content-security-policy: frame-ancestors "none";
```

✅ Prevents your app from being embedded in an iframe.

#### Where should you store JWT tokens in a React app? and why in depth?

Answer:
✅ Short Answer:
The safest place to store a JWT in a React app is in an HttpOnly, Secure cookie.

But let’s dive into why — and what are the trade-offs of other approaches.

🧠 Your 3 Main Storage Options
Storage Type XSS Safe CSRF Safe Refresh-safe Accessible from JS Persistent
HttpOnly Cookie ✅ ❌ (unless mitigated) ✅ ❌ (no JS access) ✅
localStorage ❌ ✅ ❌ ✅ ✅
memory (in RAM) ✅ ✅ ❌ ✅ (while running) ❌ (cleared on refresh)

🔐 1. HttpOnly Secure Cookie — Recommended
✅ Pros:
Not accessible from JavaScript → protects from XSS

Automatically sent on every request

Works well with refresh tokens and session management

Integrates well with backend auth/session mechanisms

⚠️ Cons:
Vulnerable to CSRF unless mitigated:

Use SameSite=Strict or SameSite=Lax

Add CSRF token validation on backend

Slightly more complex setup:

Backend must set and read cookies

Requires cookie headers on CORS (e.g., credentials: 'include')

Example:
Backend sets cookie:

http
Copy
Edit
Set-Cookie: token=abcd123; HttpOnly; Secure; SameSite=Strict
Frontend fetch with credentials:

js
Copy
Edit
fetch('/api/data', {
method: 'GET',
credentials: 'include',
});
🗂️ 2. localStorage — Convenient but Vulnerable
✅ Pros:
Easy to implement

Survives page reloads and tabs

Compatible with SPAs

❌ Cons:
Prone to XSS attacks

If a script is injected into your app (from 3rd-party, user input, etc.), it can read your token.

You can’t securely implement refresh tokens in localStorage.

Verdict: ❌ Not recommended for sensitive apps (e.g., fintech, healthcare).
🧠 3. Memory (React State or JS Variable)
✅ Pros:
Not accessible to XSS or CSRF

Short-lived, cleared on refresh

❌ Cons:
Token is lost on page refresh or new tab

Requires complex re-auth or re-hydration strategy (e.g., silent refresh)

When to Use:
For storing access tokens only, paired with a refresh token in a cookie

Good for highly secure SPAs that don’t need persistent login

🔄 Best Practice in Modern Architecture
🔁 Split Tokens for Security:
Type Stored In Lifetime Purpose
Access Token In Memory Short (5–15m) Make API requests
Refresh Token HttpOnly Cookie Long (1–7d) Re-authenticate silently

✅ This avoids exposing tokens to JS, while keeping the user logged in across tabs or reloads.

👮 Backend Setup for Maximum Security
Set-Cookie must include:

HttpOnly

Secure (HTTPS only)

SameSite=Strict (or Lax for cross-origin)

Backend should issue new access token when refresh token is valid

Protect refresh token route with additional CSRF token or device ID

🚨 Common Mistakes
❌ Storing both access and refresh tokens in localStorage
❌ Not protecting refresh tokens from XSS/CSRF
❌ Using HttpOnly cookies but not setting SameSite

✅ Summary
App Type Recommended Token Storage Strategy
Public or low-risk Access token in memory or localStorage (if no XSS)
Secure enterprise app Access in memory, refresh in HttpOnly cookie
Fintech/Healthcare ✅ HttpOnly Secure cookies only

### ⚛️ React Server Components (RSC) — Overview for Interviews

#### 📌 What Are Server Components?

###### React Server Components are components that:

- Run only on the server
- Never ship JavaScript to the browser
- Can fetch data, access databases, and call APIs directly
- Stream HTML or instructions to the client

###### ⚙️ Key Differences (Client vs Server Components)

| Feature                  | Server Component                 | Client Component                    |
| ------------------------ | -------------------------------- | ----------------------------------- |
| Executed on              | Node.js                          | (server) Browser                    |
| Can access database/API? | ✅ Directly                      | ❌ Must call backend via fetch      |
| Includes JS in bundle?   | ❌ No (zero JS sent)             | ✅ Yes                              |
| Supports interactivity?  | ❌ No (no useState, useEffect)   | ✅ Yes                              |
| Used for...              | Data fetching, templates, layout | Forms, interactions, event handling |

#### 🧠 Why Do Server Components Matter?

✅ Performance: Load less JS, faster pages
✅ Scalability: Fetch data closer to source
✅ Streamed HTML: Better TTFB, async SSR
✅ Separation of concerns: Logic stays on server

##### 📦 Where Are Server Components Used?

Answer:

- React 18+ supports RSC
- Next.js App Router uses RSC by default (.js = server, use client = client)
- ###### Ideal for:
  - Layouts
  - Dashboards
  - Heavy data processing
  - SEO-friendly content

🧪 Example (Next.js App Router)

###### /app/page.js

```js
// Server Component by default
import ProductList from "./ProductList";

export default function Home() {
  return <ProductList />;
}
```

###### /app/ProductList.js

```js
import db from "@/lib/db"; // safe, runs on server

export default async function ProductList() {
  const products = await db.query("SELECT * FROM products");
  return (
    <ul>
      {products.map((p) => (
        <li>{p.name}</li>
      ))}
    </ul>
  );
}
```

✅ No client bundle is sent!

#### ❗ What Server Components Can’t Do

- Can’t use useState, useEffect, useRef
- Can’t attach event handlers (e.g., onClick)
- Can't use browser-only APIs (e.g., window, localStorage)

#### 🔄 Mixing Client + Server

Server Components can import Client Components — but not vice versa.

```js
// Server Component
import Button from "./Button"; // "use client" inside

<Button />;
```

1. What are Server Components in React?
   Answer:
   Server Components run exclusively on the server. They can fetch data directly and never send any JavaScript to the client, improving performance and bundle size.

2. How do Server Components differ from Client Components?
   Feature Server Component Client Component
   Executes on Server only Browser
   JS bundle sent? ❌ No ✅ Yes
   Use hooks? ❌ (no useState) ✅
   Interactive? ❌ ✅

3. Why are Server Components more performant?
   Answer:

They send only rendered HTML (no JS)

No hydration needed

Can stream chunks of UI

Reduce bundle size and time-to-interactive

4. Can Server Components use React hooks like useState or useEffect? Why or why not?
   Answer:
   ❌ No. Server Components are rendered on the server and have no access to browser lifecycle or interactivity — which useEffect and useState depend on.

5. In which file structure does RSC work out of the box?
   Answer:
   React Server Components work seamlessly in Next.js App Router (/app). All components are server components by default unless explicitly marked with "use client".

6. How do you turn a component into a Client Component in an RSC app?
   Answer:
   Add "use client" at the top of the file:

js
Copy
Edit
"use client";

import { useState } from 'react';

export default function Button() { ... } 7. Can you fetch data inside a Server Component without using useEffect or useQuery?
Answer:
✅ Yes. You can use await fetch(...) or even query a database directly in the component body.

8. What happens if a Server Component imports a Client Component?
   Answer:
   ✅ It works. The Server Component includes the Client Component in its output and instructs the client to hydrate it.

But the reverse (Client → Server) is ❌ not allowed.

9. Can you use RSC in CRA (Create React App) or Vite?
   Answer:
   ❌ Not yet. RSC requires server-side streaming and a custom compiler setup. It currently works best in Next.js App Router (with React 18+ or 19+).

10. What is a common use case for Server Components?
    Answer:

Layouts (headers, footers)

Dashboard UI with heavy DB/API access

Static content (SEO)

Reducing JS in content-rich pages

🔹 Advanced Questions (11–20) 11. How do Server Components help with reducing bundle size?
Answer:
They don’t ship any JavaScript. Only the minimal interactivity code (Client Components) is bundled, so the overall JS payload is smaller — especially beneficial on mobile.

12. What’s the role of streaming in RSC?
    Answer:
    React can stream parts of the HTML output as they become ready (similar to streaming SSR). This enables faster first paint while waiting for slower data-bound components.

13. How do you share state between a Server Component and a Client Component?
    Answer:

Server Component passes initial props

Client Component manages interactivity

js
Copy
Edit
<Counter initialCount={10} />
State is only interactive inside the client.

14. How do you fetch data in a Server Component using Next.js?
    Answer:
    You can use any server-side logic:

js
Copy
Edit
async function ProductList() {
const data = await fetch('https://api/products');
const products = await data.json();
return <div>{products.map(p => <p>{p.name}</p>)}</div>;
} 15. How do Server Components help in building SEO-friendly applications?
Answer:
Since content is rendered on the server and sent as HTML, search engine crawlers can index the content without executing JavaScript, improving SEO performance.

##### 16. How do you handle dynamic route parameters in a Server Component?

Answer:
In Next.js App Router:

```js
// app/products/[id]/page.js
export default async function Product({ params }) {
  const res = await fetch(`/api/products/${params.id}`);
  const product = await res.json();
  return <h1>{product.title}</h1>;
}
```

17. Can Server Components access environment variables securely?
    Answer:
    ✅ Yes. They run on the server, so you can access secret environment variables (process.env.DB_SECRET) directly.

18. What happens if a Server Component tries to use window or document?
    Answer:
    ❌ It throws a build-time error. Server Components don’t have access to browser globals like window or document.

19. Can you use Zustand, Redux, or React Context in a Server Component?
    Answer:
    ❌ No for Zustand or Redux (which are client state).
    ✅ You can use Context Providers inside Server Components only to pass static values, not dynamic client state.

20. How do RSCs compare to traditional SSR (Server-Side Rendering)?
    Feature SSR RSC
    Purpose Pre-renders pages as HTML Streams HTML + separates logic
    JS sent Yes No (for server parts)
    Interactivity After hydration Client parts only
    Data fetching Outside React (e.g. getServerSideProps) Inside component directly
