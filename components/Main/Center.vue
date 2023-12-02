<template>
  <div class="flex">
    <div
        class="lg:pt-[40px] flex flex-col justify-between px-[40px] pb-[40px] pt-[150px] bg-LG space-y-4 st:bg-[url('assets/images/Main/1.jpg')] mb:">
      <div class="max-w-[480px] space-y-8">
        <div class="space-y-2">
          <h1 class="main__title mt:text-3xl/[36px]">YOUR DELIVERY TO A HEALTHY LIFE</h1>
          <p class="main__text mt:text-base">We save your time and money providing you with the most fresh and healthy
            food</p></div>
        <div class="flex space-x-4 ">
          <button class="button bg-AM mt:w-full  px-[54px] mt:py-[12px] mt:px-[10px]">
            ORDER NOW
          </button>
          <button class="button bg-LG px-[65px] mt:w-full border-2 border-solid border-PYL   mt:px-[10px]">
            SEE MENU
          </button>
        </div>
      </div>
      <div class="flex max-w-[480px] space-x-12 mt:space-x-6">
        <div class="flex flex-col items-center space-y-3">
          <div class="p-[12px] rounded-[100%] shadow ">
            <IconsLeaf></IconsLeaf>
          </div>
          <p class="main__points">Fresh
            Ingredients</p>
        </div>
        <div class="flex flex-col items-center space-y-3">
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
    <div class="st:hidden">
      <img class="rounded-br-[300px] w-[910px] h-[870px] object-cover
       " src="../../assets/images/Main/1.jpg" alt="Main image">
    </div>
  </div>
</template>

<script setup lang="ts">

</script>