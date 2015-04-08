var mui = require('material-ui');
var React = require('react');
var GraphStore = require('../stores/GraphStore.jsx');


//Set Material-UI Vars
var Menu = mui.Menu;

var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

// get graph data from store
// populate graph with data using d3
// export the graph

// d3 graph
// var width = 960;
// var height = 500;

// var color = d3.scale.category20();

// var force = d3.layout.force()
//     .charge(-120)
//     .linkDistance(30)
//     .size([width, height]);

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);

// d3.json("miserables.json", function(error, graph) {
//   force
//       .nodes(graph.nodes)
//       .links(graph.links)
//       .start();

//   var link = svg.selectAll(".link")
//       .data(graph.links)
//     .enter().append("line")
//       .attr("class", "link")
//       .style("stroke-width", function(d) { return Math.sqrt(d.value); });

//   var node = svg.selectAll(".node")
//       .data(graph.nodes)
//     .enter().append("circle")
//       .attr("class", "node")
//       .attr("r", 5)
//       .style("fill", function(d) { return color(d.group); })
//       .call(force.drag);

//   node.append("title")
//       .text(function(d) { return d.name; });

//   force.on("tick", function() {
//     link.attr("x1", function(d) { return d.source.x; })
//         .attr("y1", function(d) { return d.source.y; })
//         .attr("x2", function(d) { return d.target.x; })
//         .attr("y2", function(d) { return d.target.y; });

//     node.attr("cx", function(d) { return d.x; })
//         .attr("cy", function(d) { return d.y; });
//   });
// });

// end d3 graph


var GraphView = React.createClass({

  render: function() {
    return (
      <div className="left">
        <svg width={GraphStore.width} height={GraphStore.height} color={GraphStore.color}>
          <circle cx="60" cy="60" r="50"/>
        </svg>
      </div>
    );
  }
});

module.exports = GraphView;
