
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
            permission: false,
            sayHello: function() {
                return "Hallo ich bin " + this.firstName + " " + this.lastName;
            }
        }
        // Modul 1: Ausgabe Test
        // output( person );
        // output( person.firstName );
        // output( person.lastName );
        // output( person.sallary );

    // Modul 2: Objekt verschachteln und verknüpfen
        const testText = "Ich bin " + person.firstName + " " + person.lastName + " und verdiene " + person.sallary[ 1 ].toLocaleString('de-DE') + " € im Jahr.";
        // output( testText );
        // output( person.sayHello() );

/*******   Objekte 2 - Hierarchie   *******/
    // Der Baikalsee
    const baikal = {
        value: "10m",
        deep: {
            deeper: {
                deepest: "Das Licht - auf 1642 m!"
            }
        }
    }
    // output( baikal.deep.deeper.deepest );
    // output( baikal.deepest );

/********************************************************/
/*******                Example 01                *******/
/********************************************************/
    // Modul 1: Objekt erstellen
    let cmpMob = {
        firstName: [ "Alfred", "Heinz", "Maria" ],
        lastName: getDBln(),
        userAge: getDBage(),
        userSal: getDBsal(),
        userSex: getDBsex(),
        getGreet: function( i ) {
            return "Hallo, " + getSex( this.userSex[ i ] ) + " " + this.firstName[ i ] + " " + this.lastName[ i ];
        },
        getAge: function( i ) {
            return "ist " + setAge( this.userAge[ i ] ) + " Jahre alt";
        },
        getSalary: function( i ) {
            return "und verdient " + this.userSal[ i ] + " im Monat";
        },
        getOutput: function( i ) {
            return this.getGreet( i ) + " " + this.getAge( i ) + " " + this.getSalary( i );
        }
    }

    // output test
    // output( cmpMob.getOutput( 1 ) );
    // cmpMobStart();
    function cmpMobStart() {
        for (let i = 0; i < getDBfn().length; i++) {
            output( cmpMob.getOutput( i ) );
        }
    }

    // Modul 1: Funktionen erstellen, könnten auch aus externen DAtenbanken oder Arrays DAten sein
    function getDBfn() { return [ "Alfred", "Heinz", "Maria" ] }
    function getDBln() { return [ "Mayer", "Hermann", "Walter" ] }
    function getDBage() { return [ 1953, 1985, 1975 ] }
    function getDBsal() { return [ 50000, 40000, 65000 ] }
    function getDBsex() { return [ 0, 0, 1 ] }
    function getSex( us ) { return ( us === 1 ) ? "Frau" : "Herr"; }
    function setAge( dob ){ return new Date().getFullYear() - dob; }
/********************************************************/
/*******                  Output                  *******/
/********************************************************/
    // output
    function output( outputStr ) { console.log( outputStr ); }