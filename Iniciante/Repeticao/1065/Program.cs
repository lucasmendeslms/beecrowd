using System;
using System.Collections.Generic;

namespace Beecrowd
{
    class URI
    {
        static void Main(string[] args)
        {
            List<int> numberList = new List<int>();

            for (int i = 1; i <= 5; i++)
            {
                var number = Console.ReadLine();

                if (int.TryParse(number, out int parsedNumber) && parsedNumber % 2 == 0)
                {
                    numberList.Add(parsedNumber);
                }
            }

            Console.WriteLine($"{numberList.Count} valores pares");
        }
    }
}