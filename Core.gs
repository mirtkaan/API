function updateTitle() 
{
  
  var videoID = 'T5yXX2ZJy-E'; //ID
  var part = 'snippet,statistics';
  var params = {'id': videoID};
  
  var response = YouTube.Videos.list(part, params);
  var video = response.items[0];
  var videoViewsCount = video.statistics.viewCount;           
  var videoLikeCount = video.statistics.likeCount;           
  var videoDislikeCount = video.statistics.dislikeCount;      
  var videoCommentCount = video.statistics.commentCount;      
  var videoTitle = 'Bu Video ' + videoViewsCount + ' Kez İzlendi Ve ' + videoLikeCount + ' Kez Beğenildi!!';
  
  video.snippet.title = videoTitle;
  
  try
  {
    YouTube.Videos.update(video, part);
    
  }
  catch(e)
  {
  }
  
}
