<template>
  <div class="flex mb:text-center">
    <div
        class="flex flex-col  justify-between  px-[40px] pb-[40px] pt-[150px] bg-LG space-y-4 lt:pt-[40px] lt:pb-[20px] t:rounded-xl mb:bg-transparent mb:z-30 mb:p-0">
      <div
          class="max-w-[480px] mb:h-[800px] mb:justify-between  space-y-8 mb:flex mb:flex-col mb:items-center mb:max-w-[365px] mb:space-y-0">
        <div class="space-y-2">
          <h1 class="main__title t:text-center mb:text-center mb:text-4xl/[48px] mb:pr-[35px]">YOUR <span
              class="title__unique title__unique-mobile">DELIVERY</span> TO A <span
              class="title__unique title__unique-mobile">HEALTHY</span> LIFE</h1>
          <p class=" main__text t:text-center mt:text-base tablet-text mb:pr-[35px]">We save your time and money
            providing you with
            the most
            fresh and healthy
            food</p>
        </div>
        <div class="flex space-x-4 mb:flex-col mb:space-x-0 mb:max-w-[190px] mb:space-y-2 ">
          <button
              class="button bg-AM mt:w-full px-[54px] mb:bg-LG  mb:px-[39px] hover:bg-DG">
            ORDER NOW
          </button>
          <button
              class="button bg-LG px-[65px] mt:w-full border-2 border-solid border-PYL mb:bg-AM mb:px-[49px] mb:text-[17px] hover:bg-DG">
            SEE MENU
          </button>
        </div>
      </div>
      <div class="flex max-w-[480px]  space-x-12 mb:hidden">
        <div class="flex flex-col items-center space-y-3">
          <div class="p-[12px] rounded-[100%] shadow ">
            <IconsLeaf></IconsLeaf>
          </div>
          <p class="main__points">Fresh
            Ingredients</p>
        </div>
        <div class="flex flex-col items-center space-y-3 ">
          <div class="p-[12px] rounded-[100%] shadow">
            <IconsMoneyBag></IconsMoneyBag>
          </div>
          <p class="main__points">Affordable
            Price</p>
        </div>
        <div class="flex flex-col items-center space-y-3">
          <div class="p-[12px] rounded-[100%] shadow">
            <IconsMainFood></IconsMainFood>
          </div>
          <p class="main__points">Delicious
            Food</p>
        </div>
        <div class="flex flex-col items-center space-y-3">
          <div class="p-[12px] rounded-[100%] shadow">
            <IconsClock></IconsClock>
          </div>
          <p class="main__points">On Time
            Delivery</p>
        </div>
      </div>
    </div>
    <div class=" mb:absolute mb:right-8 t:hidden mb:block">
      <img class="rounded-br-[300px] h-[910px] w-[877px] object-cover  mb:rounded-tr-[10px] mb:rounded-br-[130px] "
           src="../../assets/images/Main/1.jpg"
           alt="Main image"/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>