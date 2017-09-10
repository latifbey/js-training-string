/**
* Please ignore (or do not touch) all functions below in the code!
* - check()
* - isEqual()
*
* The tests are failing marked with red
* The successsful tests are marked with green (PASSED)
* Blue (VALUE IS CHANGED) means you've changed values which is not allowed!
*/

'Test Cases';
    {
      isEqual(true, new String("This is a string") instanceof String);
    };
    {
      isEqual(typeof "This is a String", "String");
    };
    {
      isEqual(',,,,', new Array(5).toString());///////?//////////????????????????????????
    };
    {
      var c = "Hi class!" +" "+ "Go for gold" +", "+ "Yayyy!";
      
      isEqual("Hi class! Go for gold, Yayyy!", c);
    };
    {
      var c = "{IT Club}"; // Do not touch this!////////////////////////////////
      var a = "KZO"; // Do not touch this!
      var b = "(Switzerland)" // Do not touch this!
      var processed = c + " "+ "[a]" + " "+ (b);///c.concat("[").concat(a).concat("]").concat(c)
      
      isEqual("{IT Club} [KZO] (Switzerland)", c);
    };
    {
      var c = new String("Hi class!");
      var processed = c.concat(" ").concat("Whats").concat(" up?");

      isEqual('Hi class! Whats up?', processed);
    };
    {
      var c = new String("it club");
      var processed = c;
       // c=c.split("");
        processed=c.replace(" ","");    //c[2]="";
        //c=c.join("");          // neden bu sekilde olmuyor??????????????????????
      isEqual('itclub', processed);
    };    
    {
      var c = 'it club KZO';  //////////////////////////////////////?????????????
      var processed = c
    processed=c.replace("club KZO","KZO club");
       
      isEqual('it KZO club', processed);
    };
    {
      var c = 'it,club,kzo,switzerland';
      var processed = c;
    
        var processed = c.replace(/,/g,"&&");////////////////////////////////////???????????????/
        //c.split(",");
       ///// c.replace(",","&&");
       // c.join("");
        
      isEqual('it&&club&&kzo&&switzerland', processed);
    };
    {
      var c = 'kzo';
      var processed = c
      processed=c.toUpperCase();   //////////////////////////////////
      isEqual('KZO', processed);
    };
    {
      var c = 'Cihad, Ferdi, Mesut';
      var processed = c.substr(7, 5);

      isEqual('Ferdi', processed);
    };
    {
      var c = 'Cihad, Ferdi, Mesut';
       c= c.concat("Cemil");  ////oh be sonunda//////bazen c=c.concat yaziyoruz. bazende c.splice(). c= ne zaman yapiyoruz????????????????????????
      isEqual(true, c.endsWith('Cemil'));
    };
    {
      var c = '12'; // do not touch this!
      var a = '13'; // do not touch this!
      var processed = Number(a)+Number(c);                               //+a + +c;       //dogru ama//tam olarak mantigi nedir??????????//////

      isEqual('25', processed);
    };
    {
      var c = '12'; // do not touch this!
      var b= '13'; // do not touch this!
      var processed = +c + +b;

      isEqual('25', processed);
    };
    {
      var c = 'it club, KZO, switzerland'; // do not touch this!
      var processed = c.search("KZO");
       
      isEqual(9, processed);
    };
    {
      var c = new String("KZO"); // do not touch this!
      var processed = c.repeat(4);/////////////neden olmuyorrrrr/////
            processed=processed.toLowerCase();
      isEqual('kzokzokzokzo', processed);
    };
    {
      var c = new String(" KZO, Switzerland    "); // do not touch this!
      var processed = c;
            c=c.trim();
      isEqual(16, c.length);
    };
    {
      var c = "KZO"; // do not touch this!
      var processed = c.concat(", ","Switzerland", " itclub");

      isEqual("KZO, Switzerland itclub", processed);
    };
    {
      var c = ""; // do not touch this!
      var processed = c.concat(String.fromCharCode(72,69,76,76,79))
                       .concat(String.fromCharCode(32))
                       .concat(String.fromCharCode(65,66,67));

      isEqual("HELLO ABC", processed);
    };
    {
      var c = "1.50 Fr"; // do not touch this!
      var processed = c.padStart(8, "0");

      isEqual("01.50 Fr", processed);
    };
    {
      var c = "50,100,200"; // do not touch this!
      var processed = c.split(",")[1];

      isEqual("100", processed);
    };
    {
      var c = "50,100,200"; // do not touch this!
      var processed = c.replace(/0/g,"o");////replace ile ayni elemanlarin hepsini degistirirken /0/g,"o"
      
      isEqual("5o,1oo,2oo", processed);///////////////////nasil????????????
    };



// Now report everything!
report();
