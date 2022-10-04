<template>
    <div  class="relative w-full h-full">
      <SimpleBaselineChart :series="series" :baseValue="baseValue" :options="options" />
    </div>
  </template>

  <script>
    import SimpleBaselineChart from 'vue-sbchart';
export default {
  components: { SimpleBaselineChart },
  setup(props) {
    const series = [
	{ timestamp: 1656818225, value: 12 },
	{ timestamp: 1656818226, value: 13 },
	{ timestamp: 1656818227, value: 8 },
	{ timestamp: 1656818228, value: 15 },
	{ timestamp: 1656818229, value: 12.5 },
	{ timestamp: 1656818230, value: 13 },
	{ timestamp: 1656818231, value: 12 }
    ];
    const baseValue = 13;
    const options = {
        upColor: '#FFFF00',
	downColor: '#000',
	lineWidth: 1
    };

    return { series, baseValue, options };
  }
};
  </script>