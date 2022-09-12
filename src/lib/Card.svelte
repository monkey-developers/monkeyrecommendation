<script lang="ts">
  import StarRating from "svelte-star-rating";

  export let category: string = "UNDEFINED";
  export let image: string;
  export let name: string = "UNNAMED";
  export let rate: number = 0;
  export let description: string = "";
  export let by: string = "UNKNOWN";

  const config = {
    showText: true,
    emptyColor: '#c1b8c2',
    fullColor: '#eb0988'
  };
</script>

<div class="card">
  <div class="category">{category}</div>
  <div class="card-container">
    <img src={image} alt={name} />
    <div class="card-info">
      <div class="name">{name}</div>
      <StarRating rating={rate} {config} />
      <div class="description">
        {description}
      </div>
      <div class="recommended">By {by}</div>
    </div>
  </div>
</div>

<style lang="scss">
  .card {
    display: flex;
    & > .category {
      writing-mode: vertical-rl;
      color: white;
      text-align: center;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: bold;
    }
  }
  .card-container {
    background-color: white;
    display: flex;
    border-radius: 8px;
    position: relative;

    & > img {
      width: 100px;
    }

    & > .card-info {
      padding: 10px 5px;

      & > .name {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 5px;
      }

      & > .recommended {
        font-size: 10px;
        text-align: right;
        position: absolute;
        bottom: 5px;
        right: 5px;
      }

      & > .description {
        font-size: 0.65rem;
        word-wrap: break-word;
        width: 180px;
      }
    }
  }
</style>
