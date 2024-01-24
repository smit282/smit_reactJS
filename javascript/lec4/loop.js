// {
//     for(let counter = 0; counter <= 10 ; counter++)
//     {
//         if(counter == 6)
//         {
//             break;
//         }
//         document.write(counter);
//         document.write("<br>");
//     }
// }

// {
//     for(let counter = 1; counter <= 10 ; counter++)
//     {
//         if(counter == 3)
//         {
//             continue;
//         }
        
//         if(counter == 7)
//         {
//             continue;
//         }
//         document.write(counter);
//         document.write("<br>");
//     }
// }

{
    link: for(let counter = 1; counter <= 15 ; counter++)
    {
        document.write(counter);
        document.write("<br>");
    
        for(let counter2 = 1; counter2 < 3; counter2++)
        {
            if(counter == 7)
            {
                break link;
            }
            document.write("Hello");
            document.write("<br>");
        }
    }
}