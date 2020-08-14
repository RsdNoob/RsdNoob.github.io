window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
    data: [
    {
        type: "doughnut",
        dataPoints: [
        {  y: 4, indexLabel: "Big Data" },
        {  y: 13, indexLabel: "Machine Learning" },
        {  y: 3.5, indexLabel: "Amazon Web Services" },
        {  y: 3.5, indexLabel: "Statistics" },
        {  y: 4, indexLabel: "Deep Learning" }
        ]
    }
    ]
    });

    chart.render();
};