(() => {
    const temperaturesCelsius = [33.6, 12.34];

    const serverIp = '123.123.123.123';

    const users = [{id: 1, email: 'correo@google.com'},{ id: 2, email: 'correo2@google.com' }, { id: 3, email: 'correo3@google.com' }];

    const userEmails = users.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = true;

    
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const endTime = new Date().getTime() - startTime;


    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }
    
    function printJob() {
        throw new Error('Function not implemented.');
    }
})();
