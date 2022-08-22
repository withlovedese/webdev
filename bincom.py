import statistics
import random
shirts_of_the_week = {
    'monday': "GREEN, YELLOW, GREEN, BROWN, BLUE, PINK, BLUE, YELLOW, ORANGE, CREAM, ORANGE, RED, WHITE, BLUE, WHITE, BLUE, BLUE, BLUE, GREEN",
    'tuesday': "ARSH, BROWN, GREEN, BROWN, BLUE, BLUE, BLEW, PINK, PINK, ORANGE, ORANGE, RED, WHITE, BLUE, WHITE, WHITE, BLUE, BLUE, BLUE",
    'wednesday': "GREEN, YELLOW, GREEN, BROWN, BLUE, PINK, RED, YELLOW, ORANGE, RED, ORANGE, RED, BLUE, BLUE, WHITE, BLUE, BLUE, WHITE, WHITE",
    'thursday': "BLUE, BLUE, GREEN, WHITE, BLUE, BROWN, PINK, YELLOW, ORANGE, CREAM, ORANGE, RED, WHITE, BLUE, WHITE, BLUE, BLUE, BLUE, GREEN",
    'friday': "GREEN, WHITE, GREEN, BROWN, BLUE, BLUE, BLACK, WHITE, ORANGE, RED, RED, RED, WHITE, BLUE, WHITE, BLUE, BLUE, BLUE, WHITE"
}

# 1.      Which color of shirt is the mean color?

# 2.      Which color is mostly worn throughout the week?

# 3.      Which color is the median?

# 4.      BONUS Get the variance of the colors

# 5.      BONUS if a colour is chosen at random, what is the probability that the color is red?

# 6.      Save the colours and their frequencies in postgresql database

# 7.      BONUS write a recursive searching algorithm to search for a number entered by user in a list of numbers.

#i'm using binary seach which assumes the list of numbers is already sorted
# h = len(list) - 1
# l = 0
def search(list, h, l, inputNum):
    if h >= l:
        m = (h + l) // 2
        if list[mid] == inputNum:
            return "number found in " + mid + " index."
        elif list[m] > x:
            return search(list, l, m - 1, inputNum)
        else:
            return search(list, m + 1, h, inputNum)
 
    else:
        return inputNum + " is not present in the list!"

# 8.      Write a program that generates random 4 digits number of 0s and 1s and convert the generated number to base 10.
numbers = random.sample(range(0,2), 4)
print(''.join(map(str, numbers))) 
# 9.      Write a program to sum the first 50 fibonacci sequence.
def fibonacci(count):
    if count <= 1:
        return count
    else:
        return fibonacci(count - 1) + fibonacci(count - 2)

sum = 0

for i in range(0,50):
    sum += fibonacci(i)

    
print(sum)




