<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Homepage from "./routes/Homepage.svelte";
</script>

<Router>
  <Route path="/">
    <Homepage />
  </Route>
</Router>
