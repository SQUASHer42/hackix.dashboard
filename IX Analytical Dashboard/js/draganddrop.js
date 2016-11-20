$(document).ready(function(){
   var videoPath = "videos/lg/";
   var draggedItem = null; 
   addEvents();

function addEvents(){
    $('.segmentListItem').each(function(index){
        $(this)[0].addEventListener('dragstart',handleDragStart,false);
        $(this)[0].addEventListener('drop',handleDrop,false);
        $(this)[0].addEventListener('dragover',handleDragOver,false);
    });
}
function handleDragStart(e){
        //console.log('start');
        draggedItem = this;
        e.dataTransfer.effectAllowed = 'move';
        //e.dataTransfer.dropEffect = 'move'; //MH - do we need both of these?
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
          if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
          }
          e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
          return false;
    }

    function handleDrop(e){
        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }

        if (draggedItem != this) { //MH - swap if we're not dragging the item onto itself
            $(this).replaceWith($(draggedItem).clone(true,true));
            $(draggedItem).replaceWith($(this).clone(true,true));
            addEvents();
        } 
        return false;
    }    
    
});