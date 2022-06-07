// Saves options to chrome.storage
function save_options() {
  var urlInput = document.getElementById('urlInput').value;
  chrome.storage.sync.get({urlList : ["https://www.youtube.com/watch?v=3KwKhcfIt9U",
              "https://www.youtube.com/watch?v=RBe6j2Jh7jw",
              "https://www.youtube.com/watch?v=agZZn_512nQ",
              "https://www.youtube.com/watch?v=n-87MCxKzb0",
              "https://www.youtube.com/watch?v=YfL7PNe3UGk",
              "https://www.youtube.com/watch?v=WNlAz1tYWAg",
              "https://www.youtube.com/watch?v=BBOCbsW0rIE",
              "https://www.youtube.com/watch?v=k4KTPgD0x98",
              "https://www.youtube.com/watch?v=jBhGTI9YIME",
              "https://www.youtube.com/watch?v=xh2LrGQoWRs",
              "https://www.youtube.com/watch?v=feNxTcDRa-U",
              "https://www.youtube.com/watch?v=FsVJ8ie2sfs",
              "https://www.youtube.com/watch?v=Sae3ocnkv1s",
              "https://www.youtube.com/watch?v=Ezz0FrEyNOU",
              "https://www.youtube.com/watch?v=SlcpC35nsic",
              "https://www.youtube.com/watch?v=JtwbyblcV2A",
              "https://www.youtube.com/watch?v=3Q4eckSR0OI",
              "https://www.youtube.com/watch?v=qkcYlnVt5Z0",
              "https://www.youtube.com/watch?v=lzyDGXCNPq8",
              "https://www.youtube.com/watch?v=VpFRbFLoaO4",
              "https://www.youtube.com/watch?v=g2tqt-8PUpM",
              "https://www.youtube.com/watch?v=3tH5bCAGbuw",
              "https://www.youtube.com/watch?v=Q-ElrOp0k2Q",
              "https://www.youtube.com/watch?v=cgn3elU4R48",
              "https://www.youtube.com/watch?v=cpt_SNmOXvM",
              "https://www.youtube.com/watch?v=IeVxExmyonc",
              "https://www.youtube.com/watch?v=CXcn9shBP4g",
              "https://www.youtube.com/watch?v=4ESf80O31Ig",
              "https://www.youtube.com/watch?v=16sarYPNAzs",
              "https://www.youtube.com/watch?v=HHIBezJv0Rg",
              "https://www.youtube.com/watch?v=DLRxhbQbE9U",
              "https://www.youtube.com/watch?v=AqkvvuzrPyc",
              "https://www.youtube.com/watch?v=4RVp_EeNRyc",
              "https://www.youtube.com/watch?v=ZyarxSg9vVs",
              "https://www.youtube.com/watch?v=d263O-S3iVc",
              "https://www.youtube.com/watch?v=7ypLZeIToao",
              "https://www.youtube.com/watch?v=UXlXzJiSpK4",
              "https://www.youtube.com/watch?v=ATwjXAb_9ys",
              "https://www.youtube.com/watch?v=UapBCS4nge0",
              "https://www.youtube.com/watch?v=cwMERX3H1RU",
              "https://www.youtube.com/watch?v=ELOnz_0JJ0k",
              "https://www.youtube.com/watch?v=_6x23dvhcI8",
              "https://www.youtube.com/watch?v=Iq8eRPUua0U",
              "https://www.youtube.com/watch?v=7HUqH4DQWN8",
              "https://www.youtube.com/watch?v=Q94AEbIfYoA"]}, function(items){
    items.urlList.push(urlInput);
    chrome.storage.sync.set(items, function() {
      // Update status to let user know options were saved.
      document.getElementById('urlList').innerHTML = items.urlList.join("<br>");
    });
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    urlList : ["https://www.youtube.com/watch?v=3KwKhcfIt9U",
              "https://www.youtube.com/watch?v=RBe6j2Jh7jw",
              "https://www.youtube.com/watch?v=agZZn_512nQ",
              "https://www.youtube.com/watch?v=n-87MCxKzb0",
              "https://www.youtube.com/watch?v=YfL7PNe3UGk",
              "https://www.youtube.com/watch?v=WNlAz1tYWAg",
              "https://www.youtube.com/watch?v=BBOCbsW0rIE",
              "https://www.youtube.com/watch?v=k4KTPgD0x98",
              "https://www.youtube.com/watch?v=jBhGTI9YIME",
              "https://www.youtube.com/watch?v=xh2LrGQoWRs",
              "https://www.youtube.com/watch?v=feNxTcDRa-U",
              "https://www.youtube.com/watch?v=FsVJ8ie2sfs",
              "https://www.youtube.com/watch?v=Sae3ocnkv1s",
              "https://www.youtube.com/watch?v=Ezz0FrEyNOU",
              "https://www.youtube.com/watch?v=SlcpC35nsic",
              "https://www.youtube.com/watch?v=JtwbyblcV2A",
              "https://www.youtube.com/watch?v=3Q4eckSR0OI",
              "https://www.youtube.com/watch?v=qkcYlnVt5Z0",
              "https://www.youtube.com/watch?v=lzyDGXCNPq8",
              "https://www.youtube.com/watch?v=VpFRbFLoaO4",
              "https://www.youtube.com/watch?v=g2tqt-8PUpM",
              "https://www.youtube.com/watch?v=3tH5bCAGbuw",
              "https://www.youtube.com/watch?v=Q-ElrOp0k2Q",
              "https://www.youtube.com/watch?v=cgn3elU4R48",
              "https://www.youtube.com/watch?v=cpt_SNmOXvM",
              "https://www.youtube.com/watch?v=IeVxExmyonc",
              "https://www.youtube.com/watch?v=CXcn9shBP4g",
              "https://www.youtube.com/watch?v=4ESf80O31Ig",
              "https://www.youtube.com/watch?v=16sarYPNAzs",
              "https://www.youtube.com/watch?v=HHIBezJv0Rg",
              "https://www.youtube.com/watch?v=DLRxhbQbE9U",
              "https://www.youtube.com/watch?v=AqkvvuzrPyc",
              "https://www.youtube.com/watch?v=4RVp_EeNRyc",
              "https://www.youtube.com/watch?v=ZyarxSg9vVs",
              "https://www.youtube.com/watch?v=d263O-S3iVc",
              "https://www.youtube.com/watch?v=7ypLZeIToao",
              "https://www.youtube.com/watch?v=UXlXzJiSpK4",
              "https://www.youtube.com/watch?v=ATwjXAb_9ys",
              "https://www.youtube.com/watch?v=UapBCS4nge0",
              "https://www.youtube.com/watch?v=cwMERX3H1RU",
              "https://www.youtube.com/watch?v=ELOnz_0JJ0k",
              "https://www.youtube.com/watch?v=_6x23dvhcI8",
              "https://www.youtube.com/watch?v=Iq8eRPUua0U",
              "https://www.youtube.com/watch?v=7HUqH4DQWN8",
              "https://www.youtube.com/watch?v=Q94AEbIfYoA"]
  }, function(items) {
    document.getElementById('urlList').innerHTML = items.urlList.join("<br>");
  });
}

document.addEventListener('DOMContentLoaded', restore_options);

document.getElementById('add').addEventListener('click',
                                                 save_options);
                                               
/*                                               
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if (typeof changeInfo.url != 'undefined'){
    console.log(changeInfo.url);
  chrome.storage.sync.get({urlList : []}, function(items){
    items.urlList.push(changeInfo.url);
    chrome.storage.sync.set(items, function() {
      // Update status to let user know options were saved.
      document.getElementById('urlList').innerHTML = items.urlList.join("<br>");
    });
  });
  }
});//*/