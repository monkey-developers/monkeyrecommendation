<script lang="ts">
  import StarRating from "svelte-star-rating";

  const config = {
    showText: true,
  };
</script>

<div class="card-container">
  <img src={"./cs.jpg"} alt={"Chainsaw Man"} />
  <div class="card-info">
    <div class="name">{"Chainsaw Man"}</div>
    <StarRating rating={4} {config} />
    <div class="description">
      {"Anime sobre Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae a neque impedit laudantium"}
    </div>
    <div class="recommended">By {"Icaro"}</div>
  </div>
</div>

<style lang="scss">
  .card-container {
    background-color: white;
    display: flex;
    border-radius: 8px;

    & > img {
      width: 100px;
    }

    & > .card-info {
      padding: 10px 5px;

      & > .name {
        text-transform: uppercase;
        font-weight: bold;
      }

      & > .recommended {
        font-size: 10px;
        text-align: right;
      }

      & > .description {
        font-size: 0.8rem;
      }
    }
  }
</style>
