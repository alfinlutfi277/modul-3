
//Get the Element
var inputContentActivityEl = $('#activityContent');
var btnAddActivityEl = $('#addActivity');
var listActivitiesEl = $('#listActivity');

var list_activities = [];


btnAddActivityEl.on('click', function(e){
  
  var activity = {
    content: inputContentActivityEl.val(),
    done: false
  }

  list_activities.push(activity);

  setActivityHtml(activity, list_activities.length - 1 );

  e.preventDefault();
})

var setActivityHtml = function(activity, index){
  var html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                <p>`+ activity.content +`</p>
                <div class="text-center">
                  
                  <button class="btn btn-danger my-2" onClick="deleteActivity(`+ index +`, this)">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </li>`;
  
  listActivitiesEl.append(html); //add HTML di Element List 
}


var deleteActivity = function(index, btnDeleteEl) {
  var el = $(btnDeleteEl);
  el.parent().parent("li").remove();

  //remove 
  list_activities.splice(index, 1);
}