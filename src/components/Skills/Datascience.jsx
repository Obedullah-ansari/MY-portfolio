import React from 'react'
import styles from "./Skills.module.css";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import {  PolarArea } from "react-chartjs-2";

function Datascience() {
  return (
    <>
    <div className={styles.pichart}>
            <PolarArea
              data={{
                labels: [
                  "Machine-Learning",
                  "Deep-learning",
                  "python",
                  "powerbi",
                  "A.I",
                  "Mathematics"
                ],
                datasets: [
                  {
                    data: [68, 75, 88, 83,64,72 ],
                    backgroundColor: [
                      "#F4D03F ",
                      "#AF7AC5",
                      "#F1948A ",
                      "#76D7C4",
                      "#B3B6B7",
                      "#FF00FF"
                    ],
                    borderWidth: 0,
                    hoverBackgroundColor: "cyan",
                  },
                ],
              }}
              options={{
                scale: {
                  categorySpacing: 10, // Increase or decrease this value to adjust the spacing between slices
                  grid: {
                    display :false,
                    // color: "rgba(255, 255, 255, 0.2)",
                  },
                },
                plugins: {
                  legend: {
                    labels: {
                      color: "#EAF2F8",
                      font: {
                        size: 11,
                        weight: "bold",
                      },
                    },
                  },
                },
              }}
            />
          </div></>
  )
}

export default Datascience
