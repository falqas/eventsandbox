console.log('app loaded');
console.log('event.currentTarget: identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached');
console.log('-as opposed to-');
console.log('event.target: identifies the element on which the event occurred');

var squareEl = `
<a href="https://www.google.com">
<div class="square">
<div class="content">
    <div class="table">
        <div class="table-cell">
        </div>
    </div>
</div>
</div>
</a>
`


$(document).ready(() => {

    let colors = ['navy', 'blue', 'red', 'purple', 'green', 'pink', 'teal', 'lime', 'olive', 'gray', 'aqua', 'orange', 'silver', 'yellow', 'maroon', 'fuschia'];

    for (let i = 0; i < 12; i++) {
        // var randomColor = "#" + Math.random().toString(16).slice(2, 8);
        $('.boxes').append(squareEl);
        $('.table-cell').eq(i).css('background-color', colors[i]);
        $('.table-cell').eq(i).attr('id', colors[i]);
    }

    function logCurrentTarget(event) {
        if ($(event.target).attr('id') !== 'gray') {
            event.preventDefault();
        } else {
            console.log('oh no! redirecting...')
        }
        console.log('');
        console.log('event.currentTarget:');
        console.log(event.currentTarget);
        $(event.target).append(`<p>oh hi</p>`)
    }

    $('.boxes').on('click', logCurrentTarget);

    $('#pink').on('click', logCurrentTarget);

})