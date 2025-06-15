const upBubble = document.getElementById('upBubble'),
hello = document.getElementById('hello'),

SpansSmallScreen = document.querySelectorAll('#upBubble .smallScreen'),

smallScreen = document.querySelectorAll('.Secondbubble .smallScreen')



    // hello.removeChild(upBubble)
    // spans.forEach(span => 
    //     span.remove()
    // )

    function updateSpanVisibility() {
        
        SpansSmallScreen.forEach(span => {
          if (window.innerWidth <= 920) {
            span.style.display = 'none';
          } else {
            span.style.display = '';
          }
        });


        smallScreen.forEach(SecondSpans => {
          if (window.innerWidth <= 920) {
            SecondSpans.style.display = 'none';
          }
           else {
            SecondSpans.style.display = '';
          }
        });
       
      }
      
      updateSpanVisibility();
      window.addEventListener('resize', updateSpanVisibility);
      