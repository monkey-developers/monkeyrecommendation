<div class="navbar-container">
  <div class="title">Monkey<span>recomendation</span></div>
  <div class="made-by">
    Developed by <a href="https://github.com/iguoliveira" target="_blank"
      >{"<iguoliveira />"}</a
    >
  </div>
</div>

<style lang="scss">
  @import "../../variables.scss";
  .navbar-container {
    padding: 20px 20px;
    color: $lightColor;
    font-family: Rubik;

    & > .title {
      font-size: 2rem;

      & > span {
        color: $mainColor;
      }
    }

    & > .made-by {
      font-size: 1.25rem;
      & > a {
        text-decoration: none;
        color: $mainColor;
      }
    }
  }
</style>
