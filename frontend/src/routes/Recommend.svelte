<script lang="ts">
  import { Link } from "svelte-navigator";
  let result;
  export const data = {
    masterpiece: "",
    rate: 0,
    author: "",
    description: "",
    category: "",
  };

  export const handleClick = async () => {
    event.preventDefault();
    const res = await fetch("http://localhost:8080/recommendation", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });

    const json = await res.json();
    result = JSON.stringify(json);
  };
</script>

<section>
  <form on:submit={handleClick}>
    <div class="input-container">
      <label for="masterpiece" class="label">Masterpiece:</label>
      <input
        class="input"
        type="text"
        id="masterpiece"
        placeholder="Masterpiece"
        bind:value={data.masterpiece}
      />
    </div>

    <div class="input-container">
      <label for="rate" class="label">Rating:</label>
      <input
        class="input"
        type="number"
        id="rate"
        placeholder="Rating"
        bind:value={data.rate}
      />
    </div>

    <div class="input-container">
      <label for="author" class="label">Author:</label>
      <input
        class="input"
        type="text"
        id="author"
        placeholder="Author"
        bind:value={data.author}
      />
    </div>

    <div class="input-container">
      <label for="description" class="label">Description:</label>
      <input
        class="input"
        type="text"
        id="description"
        placeholder="Description"
        bind:value={data.description}
      />
    </div>

    <div class="input-container">
      <label for="category" class="label">Category:</label>
      <input
        class="input"
        type="text"
        id="category"
        placeholder="Category"
        bind:value={data.category}
      />
    </div>
    <input type="file" />
    <button type="submit">Recommend</button>
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

      & > .input-container {
        display: flex;
        align-items: center;
        gap: 5px;

        & > .label {
          text-transform: uppercase;
          cursor: pointer;
        }

        & > .input {
          background-color: transparent;
          border: 0;
          border-bottom: 1px solid $mainColor;
          padding: 5px;
          cursor: pointer;

          &:focus {
            outline: none;
            border-left: 5px solid $mainColor;
            border-color: $mainColor;
          }
        }
      }

      & > button {
        background: $darkColor;
        border: 0;
        color: white;
        padding: 10px 20px;
        border-radius: $rounded;
        cursor: pointer;
        text-transform: uppercase;
        &:hover {
          padding: 11px 25px;
        }
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
