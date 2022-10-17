<script lang="ts">
  export let forVal: string = "";
  export let label: string = "";

  export let type: string = "";
  export let id: string = "";
  export let placeholder: string = "";
  export let value: string = "";
</script>

<div class="input-container">
  <label for={forVal}>{label}</label>
  <input {type} {id} {placeholder} {value} />
</div>

<style lang="scss">
  @import "../variables.scss";

  .input-container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  label {
    text-transform: uppercase;
    cursor: pointer;
  }

  input {
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
</style>
