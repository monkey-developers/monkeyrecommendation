<script lang="ts">
  import { Link } from "svelte-navigator";
  import Input from "../lib/Input.svelte";
</script>

<section>
  <form>
    <Input
      forVal="masterpiece"
      label="Masterpiece:"
      type="text"
      id="masterpiece"
      placeholder="Masterpiece"
    />
    <Input
      forVal="rating"
      label="Rating:"
      type="number"
      id="rating"
      placeholder="Rating"
    />
    <Input
      forVal="description"
      label="Description:"
      type="text"
      id="description"
      placeholder="Description"
    />
    <Input
      forVal="author"
      label="Author:"
      type="text"
      id="author"
      placeholder="Author"
    />
    <Input
      forVal="type"
      label="Type:"
      type="text"
      id="type"
      placeholder="Type"
    />
    <input type="file" />
    <button>Recommend</button>
  </form>
  <Link to="/" class="link-button">Back</Link>
</section>

<style lang="scss">
  @import "../variables.scss";

  section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    & > form {
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 25px;
      border-radius: $rounded;

      & > button {
        background: $darkColor;
        border: 0;
        color: white;
        padding: 10px;
      }
    }

    & > :global(a) {
      background-color: $mainColor;
      border: 0;
      padding: 10px 40px;
      cursor: pointer;
      text-transform: uppercase;
      color: white;
      border-radius: 8px;
      text-transform: uppercase;
      text-decoration: none;

      &:hover {
        padding: 12px 50px;
      }
    }
  }
</style>
