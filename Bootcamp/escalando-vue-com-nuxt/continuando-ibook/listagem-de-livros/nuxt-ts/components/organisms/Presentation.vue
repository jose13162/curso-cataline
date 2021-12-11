<template>
  <div class="presentation">
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex eos porro
      architecto corporis tempora repudiandae quae. Facere quas, libero suscipit
      cumque cupiditate nulla blanditiis earum autem quo, odio inventore
      nostrum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
      odit aliquid, eligendi maiores itaque, repudiandae libero dolore vel fuga
      velit ea iure quidem expedita in vitae voluptatem atque molestias minima?
    </p>

    <img src="@/assets/img/presentation.svg" alt="Apresentação do iBook" />
  </div>
</template>

<style scoped lang="scss">
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  @include screen("small", "medium") {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
