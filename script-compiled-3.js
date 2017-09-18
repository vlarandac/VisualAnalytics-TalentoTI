/*eslint no-undef: 0*/

function createChart (svg, data) {

  // //normalize data
  // Object.keys(data).forEach((d)=>{
  //   ["0", "1", "2", "3", "4", "5", "6"].forEach(k=>{
  //     if (d[k] === undefined) d[k] =
  //   })
  // })

  //var colors = ["#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"]

  svg = d3.select(svg)
  var margin = {top: 20, right: 20, bottom: 30, left: 40}
  var width = 960 - margin.left - margin.right
  var height = 500 - margin.top - margin.bottom
  var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  var x0 = d3.scaleBand()
    .rangeRound([0, width])
    .paddingInner(0.1)

  var x1 = d3.scaleBand()
    .padding(0.05)

  var y = d3.scaleLinear()
    .rangeRound([height, 0])

  var z = d3.scaleOrdinal(d3.schemeCategory10)

  // check each subset of data for possible sections, since not all subsets have every possible section.
  var nameKeys = data[Object.keys(data)[0]].map(function (obj) { return obj.name; })
  var valueKeys =   ["MAESTRIA","UNIVERSITARIO","TECNICO PROFESIONAL","TECNICO LABORAL","TECNOLOGIA"]

    //fill in empty data entries
    Object.keys(data).forEach(function (d){
      data[d].forEach(function (section){
        valueKeys.forEach(function (k){
          if (section.values[k] === undefined) { section.values[k] = 0 }
        })
      })
    })

  x0.domain(nameKeys)
  x1.domain(valueKeys).rangeRound([0, x0.bandwidth()])

  var barContainer = g.append('g')

  var xAxis = g.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x0))
      //.attr("transform", "rotate(90)")

  var yAxis = g.append('g')
      .attr('class', 'axis')

  yAxis
    .append('text')
      .attr('x', 2)
      .attr('y', y(y.ticks().pop()) + 0.5)
      .attr('dy', '0.32em')
      .attr('font-weight', 'bold')
      .attr('text-anchor', 'start')
      .text('Beneficiados')

  var legend = g.append('g')
  .attr('font-size', 10)
  .attr('text-anchor', 'end')

  legend.append('text')
  .text('Nivel del programa')
  .attr('x', width - 19)
  .style('font-weight', 'bold')
  .attr('dy', -10)
  .attr('dx', 20)

  var legendEnter = legend
    .selectAll('g')
    .data(valueKeys)
    .enter().append('g')
      .attr('transform', function (d, i) { return 'translate(0,' + i * 20 + ')' })

  legendEnter.append('rect')
      .attr('x', width - 19)
      .attr('width', 19)
      .attr('height', 19)
      .attr('fill', z)

  legendEnter.append('text')
      .attr('x', width - 24)
      .attr('y', 9.5)
      .attr('dy', '0.32em')
      .text(function (d) { return d; })

  var stack = d3.stack()
      .keys(valueKeys)

  function updateChart (data, chartType) {
    if ( chartType === void 0 ) chartType='group';


    if (chartType === 'group'){

      //find max value of a section
      var maxValue = d3.max(data.map(function (d) { return Object.values(d.values); }).reduce(function (a, b) { return a.concat(b); }, []))
      y.domain([0, maxValue]).nice()

      yAxis.transition()
      .call(d3.axisLeft(y))

      var barsWithData = barContainer
      .selectAll('g')
      .data(data)

      barsWithData.exit().remove()

      var bars = barsWithData
      .enter()
      .append('g')
      .attr('transform', function (d) { return 'translate(' + x0(d.name) + ',0)' })
      .merge(barsWithData)
      .selectAll('rect')
      .data(function (d) {
        return Object.keys(d.values).map(function (k) { return ({ key: k, value: d.values[k] }); })
      })

      bars.exit().transition().style('opacity', 0).remove()

      bars
      .enter()
      .append('rect')
      .attr('fill', function (d) {
        return z(d.key)
      })
      // start y at height (0) so animation in looks like bars are growing upwards
      .attr('y', height)
      .merge(bars)
      .transition()
      .attr('width', x1.bandwidth())
      .attr('x', function (d) { return x1(d.key) })
      .attr('y', function (d) { return y(d.value); })
      .attr('height', function (d) { return height - y(d.value); })

    }

  }


  return {
    updateChart: updateChart
  }
}
//d3.csv("completo2.csv", function(error, data) {

d3.json('./beneficiarios.json', function(error, data){

  //start with the first year selected
  var chart = createChart(document.querySelector('svg'), data)

  // Filtro de convocatoria
  var fieldset1 = d3.select('.controls').append('fieldset')
  fieldset1.append('legend').text('Convocatoria')

  Object.keys(data).forEach(function (convocatoria, index ){

    var label = fieldset1.append('label')

    label
    .append('input')
    .attr('type', 'radio')
    .attr('name', 'convocatoria')
    .attr('value', convocatoria)
    .attr('checked', function(){
      if (index === 0) { return true }
      return null
    })

    label.append('span')
    .text(convocatoria)

    label.on('click', function(){
      chart.updateChart(data[document.querySelector('input[name="convocatoria"]:checked').value])
    })
  })

  
  // render initial chart
  chart.updateChart(data[Object.keys(data)[0]])

})
