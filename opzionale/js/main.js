$(document).ready(function() {   // inizio doc ready

  // referenze
  var input = $('.mess-input');
  var button = $('.mess-btn');
  var chat = $('.chat');
  var source = $("#message-template").html();
  var compiled = Handlebars.compile(source);
  

  //esercizio richiesta 2
  var data = [
      {
        text: 'A bello',
        time: '13:00',
        user: 'sent'
      },
      {
        text: 'Hey che dici?',
        time: '13:12',
        user: 'received'
      },
      {
        text: 'solita roba',
        time: '13:14',
        user: 'sent'
      }
    ];
      $.each(data,function( i ) {
      console.log(data[i]);
    
      var html = compiled(data[i]);
      chat.append(html);
    
  });
 
  
  //eseercizio richiesta 1
  var template = Handlebars.compile(source);
  //inserim. nuovo messaggio 
  button.click(function() {
  
    
    var message = input.val().trim()
  
    var data = {

      text: message,
      time: '15:15',
      user: 'sent'
    };

    var html = template(data);
  
    chat.append(html);
  
    input.val('');

    //risposta automatica
    setTimeout(function() {

      var data = {
        text: 'ok',
        time: '15:21',
        user: 'received'
      };var html = template(data);
  
      chat.append(html);
        
        
        
    }, 1000);
  
  });
  
    
    
    
})  // fine doc ready