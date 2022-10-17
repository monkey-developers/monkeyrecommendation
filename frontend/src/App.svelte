<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Homepage from "./routes/Homepage.svelte";
  import Recommend from "./routes/Recommend.svelte";
  import Navbar from "./lib/Navbar.svelte";
</script>

<Router>
  <Navbar />
  <Route path="/">
    <Homepage />
  </Route>

  <Route path="/recommend">
    <Recommend />
  </Route>
</Router>
