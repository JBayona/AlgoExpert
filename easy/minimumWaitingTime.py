"""
Tieu owns a pizza restaurant and he manages it in his own way. While in a normal restaurant, a customer
is served by following the first-come, first-served rule, Tieu simply minimizes the average waiting time of his
customers. So he gets to decide who is served first, regardless of how sooner or later a person comes.

Different kinds of pizzas take different amounts of time to cook. Also, once he starts cooking a pizza, he cannot
cook another pizza until the first pizza is completely cooked. Let's say we have three customers who come
at time t=0, t=1, & t=2 respectively, and the time needed to cook their pizzas is 3, 9, & 6 respectively. If Tieu applies
first-come, first-served rule, then the waiting time of three customers is 3, 11, & 16 respectively. The average waiting
time in this case is (3 + 11 + 16) / 3 = 10. This is not an optimized solution. After serving the first customer
at time t=3, Tieu can choose to serve the third customer. In that case, the waiting time will be 3, 7, & 17 respectively.
Hence the average waiting time is (3 + 7 + 17) / 3 = 9.

Help Tieu achieve the minimum average waiting time. For the sake of simplicity, just find the integer part of the
minimum average waiting time.

https://www.hackerrank.com/challenges/minimum-average-waiting-time/problem
"""

#!/bin/python3

import os
import sys
from heapq import heappush, heappop
#
# Complete the minimumAverage function below.
#
def minimumAverage(customers):
    #
    # Write your code here.
    #
    total_time = 0
    waiting_time = 0
    # Pop from the end
    customers.sort(reverse=True)
    queue = []
    
    # Main logic
    while customers or queue:
        # index 0 is arrival time
        while customers and customers[-1][0] < total_time:
            """
            0 , 3 -> 3, 0
            based on the 0 index, it will use the heap, that's
            why we are reserving
            """
            heappush(queue, customers.pop()[::-1])
        if queue:
            task = heappop(queue)
            total_time += task[0]
            # Time she order - time she serve
            waiting_time += total_time - task[1]
        else:
            heappush(queue, customers.pop()[::-1])
            # Sometimes the arrival does not start at 0, it's
            # it's the first iteration
            total_time = queue[0][1]
    return waiting_time // n

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    customers = []

    for _ in range(n):
        customers.append(list(map(int, input().rstrip().split())))

    result = minimumAverage(customers)

    fptr.write(str(result) + '\n')

    fptr.close()
