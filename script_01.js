
/***** Erinnerung: Arrays *******/

// default arrays
    // let arr;
    // arr = ["Ich","bin","Max"];
    // output(arr);
    // output(arr[0]);
    // output("------------");

// nested arrays
    // arr = [
    //     ["Ich","bin","Max"],
    //     ["Ich","bin","Moritz"]
    // ];
    
    // output(arr[0][2]);
    // output(arr[1][2]);
    // output("------------");
    
// nested loops
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[0].length; j++) { 
    //         output(arr[i][j]);          
    //        }   
    // }
    
    
/*******   Objekte 1 Daten/Funktionen   *******/
    // Modul 1: Objekt erstellen
    let person = {
        firstName: "Max",
        lastName: "Mustermann",
        sallary: [ 120000, 160000 ],
        doorPermission: false,
        sayHello: function() { 
            return "Hallo ich bin " + this.firstName + " " + this.lastName ;
         }
    }
    // Modul 1: Ausgabe Test
    // output( person );
    // output( person.firstName );
    // output( person.lastName );
    // output( person.sallary );

    // Modul 2: Objekt verschachteln und verknüpfen
    const testText = "Ich bin " + person.firstName + " " + person.lastName + " und verdiene " + person.sallary[ 1 ].toLocaleString('de-DE') + " € im Jahr.";
    output( testText );
    output( person.sayHello );
    
    
    
/********************************************************/
/*******                  Output                  *******/
/********************************************************/
    // output
    function output( outputStr ) { console.log( outputStr ); }