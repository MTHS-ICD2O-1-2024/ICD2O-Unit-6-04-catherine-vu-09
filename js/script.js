// Copyright (c) 2025 Mr. Coxall All rights reserved
//
// Created by: Catherine Vu
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("radius")

  // process
  const volume = (4 / 3) * Math.PI * (radius * radius * radius)
  const dimension = "<ul>\n<li> radius = " + radius + " mm</li>\n</ul>"

  // output
  document.getElementById("dimension").innerHTML = dimension
  document.getElementById("volume").innerHTML = "volume is: " + volume.toFixed(3) + " mm³"
}