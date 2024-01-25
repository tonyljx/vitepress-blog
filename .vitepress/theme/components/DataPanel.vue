<template>
  <div class="panel mt-[48px]">
    <div class="mx-auto container max-w-[1152px] min-h-[32px] bg-[var(--vp-c-bg-soft)] w-full rounded-[8px]">
      <section class="grid grid-cols-2 justify-items-center py-[12px] px-[24px] items-center">
        <h2 class="leading-[24px] text-[16px] font-[600]">
          本站总访问量 <span id="busuanzi_value_site_pv" class="font-bold" /> 次
        </h2>

        <h2 class="leading-[24px] text-[16px]">
          本站访客数 <span id="busuanzi_value_site_uv" class="font-bold" /> 人次
        </h2>
      </section>
    </div>
  </div>
</template>

<style scoped>
.panel {
  padding: 0 24px;
  margin-top: 24px;
}

@media (min-width: 640px) {
  .panel {
    padding: 0 48px;
    margin-top: 32px;
  }
}

@media (min-width: 960px) {
  .panel {
    padding: 0 64px;
    margin-top: 48px;
  }
}
</style>