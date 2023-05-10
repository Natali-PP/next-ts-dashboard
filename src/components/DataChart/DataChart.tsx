import { Chart, registerables } from "chart.js";
import { ChartConfiguration } from "chart.js/dist/types";
import { useEffect, useRef } from "react";
import { darkOptions } from "./Themes";
import { months } from "@/helper/Util";



const DataChart = (props: ChartConfiguration) => {
  const { data, options } = props
  const chartRef = useRef<HTMLCanvasElement>(null)

  const labels = months({ count: 7 })

  //cargo los datos una vez o si data cambia

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...darkOptions,
        },
      })

      return () => {
        chart.destroy()
      }
    }
  }, [data])

  return <canvas ref={chartRef} />
}

Chart.register(...registerables)
export default DataChart;
