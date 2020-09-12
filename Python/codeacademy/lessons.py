sales_data = [[12, 17, 22], [2, 10, 3], [5, 12, 13]]

scoops_sold = 0

for location in sales_data:
    for sold in location:
        scoops_sold += sold
print(scoops_sold)

# =====================================================================================

heights = [161, 164, 156, 144, 158, 170, 163, 163, 157]heights = [161, 164, 156, 144, 158, 170, 163, 163, 157]

can_ride_coaster = [height for height in heights if height > 161]

print(can_ride_coaster)

can_ride_coaster = [height for height in heights if height > 161]

print(can_ride_coaster)

# ====================================================================================
celsius = [0, 10, 15, 32, -5, 27, 3]
fahrenheit = [cel*9/5 + 32 for cel in celsius]
print(fahrenheit)
# ====================================================================================
# Carly's Clippers

hairstyles = ["bouffant", "pixie", "dreadlocks",
              "crew", "bowl", "bob", "mohawk", "flattop"]

prices = [30, 25, 40, 20, 20, 35, 50, 35]

last_week = [2, 3, 5, 8, 4, 4, 6, 2]

total_price = 0
for pr in prices:
    total_price += pr
average_price = total_price/len(prices)

print("Average Haircut Price: ")
print(average_price)

new_prices = [p-5 for p in prices]
print(new_prices)

total_revenue = 0

for i in range(len(hairstyles)):
    total_revenue += prices[i]*last_week[i]
print("Total Revenue: " + str(total_revenue))

average_daily_revenue = total_revenue/7
print(average_daily_revenue)

cuts_under_30 = [hairstyles[i]
                 for i in range(len(new_prices)) if new_prices[i] < 30]

print(cuts_under_30)

# ====================================================================================
# Write your function here


def add_greetings(names):
    greetings = []
    for name in names:
        greetings.append("Hello, "+name)
    return greetings


# Uncomment the line below when your function is done
print(add_greetings(["Owen", "Max", "Sophie"]))
# ====================================================================================
# Write your function here


def delete_starting_evens(lst):
    while(len(lst) > 0 and lst[0] % 2 == 0):
        lst = lst[1:]
    return lst


# Uncomment the lines below when your function is done
print(delete_starting_evens([4, 8, 10, 11, 12, 15]))
print(delete_starting_evens([4, 8, 10]))
# ====================================================================================
# Write your function here


def odd_indices(lst):
    lst2 = []
    for i in range(len(lst)):
        if(i % 2 == 1):
            lst2.append(lst[i])
    return lst2


# Uncomment the line below when your function is done
print(odd_indices([4, 3, 7, 10, 11, -2]))
# ====================================================================================
# Write your function here


def exponents(bases, powers):
    lst = []
    for base in bases:
        for power in powers:
            lst.append(base**power)
    return lst


# Uncomment the line below when your function is done
print(exponents([2, 3, 4], [1, 2, 3]))
# ====================================================================================
# Write your function here


def larger_sum(lst1, lst2):
    sum1 = 0
    sum2 = 0
    for num in lst1:
        sum1 += num
    for num in lst2:
        sum2 += num
    if sum2 > sum1:
        return lst2
    else:
        return lst1


# Uncomment the line below when your function is done
print(larger_sum([1, 9, 5], [2, 3, 7]))
# ====================================================================================
# Write your function here


def over_nine_thousand(lst):
    sum = 0
    for num in lst:
        if sum > 9000:
            break
        sum += num
    return sum


# Uncomment the line below when your function is done
print(over_nine_thousand([8000, 900, 120, 5000]))
# ====================================================================================
# Write your function here


def max_num(nums):
    lg = nums[0]
    for num in nums:
        if num > lg:
            lg = num
    return lg


# Uncomment the line below when your function is done
print(max_num([50, -10, 0, 75, 20]))
# ====================================================================================
# Write your function here


def same_values(lst1, lst2):
    same = []
    for i in range(len(lst1)):
        if lst1[i] == lst2[i]:
            same.append(i)
    return same


# Uncomment the line below when your function is done
print(same_values([5, 1, -10, 3, 3], [5, 10, -10, 3, 5]))
# ====================================================================================
# Write your function here


def reversed_list(lst1, lst2):
    isSame = True
    for i in range(len(lst2)):
        if lst1[i] != lst2[len(lst2)-1-i]:
            isSame = False
            break
    return isSame


# Uncomment the lines below when your function is done
print(reversed_list([1, 2, 3], [3, 2, 1]))
print(reversed_list([1, 5, 3], [3, 2, 1]))
# ====================================================================================
first_name = "Rodrigo"
last_name = "Villanueva"

new_account = last_name[:5]
temp_password = last_name[2:6]
# ====================================================================================
first_name = "Julie"
last_name = "Blevins"


def account_generator(first_name, last_name):
    return first_name[:3] + last_name[:3]


new_account = account_generator(first_name, last_name)
print(new_account)
# ====================================================================================
first_name = "Reiko"
last_name = "Matsuki"


def password_generator(first_name, last_name):
    return first_name[len(first_name)-3:] + last_name[len(last_name)-3:]

    temp_password = password_generator(first_name, last_name)


# ====================================================================================
company_motto = "Copeland's Corporate Company helps you capably cope with the constant cacophony of daily life"

second_to_last = company_motto[-2]
final_word = company_motto[-4:]
# ====================================================================================
first_name = "Bob"
last_name = "Daily"

fixed_first_name = "R" + first_name[1:]
# ====================================================================================
password = "theycallme\"crazy\"91"
# ====================================================================================


def get_length(string):
    count = 0
    for l in string:
        count += 1
    return count
# ====================================================================================


def letter_check(word, letter):
    for l in word:
        if l == letter:
            return True
    return False
# ====================================================================================


def letter_check(word, letter):
    if word.count(letter) > 0:
        return True
    else:
        return False


print(letter_check('hola', 'k'))
# ====================================================================================


def contains(big_string, little_string):
    if little_string in big_string:
        return True
    else:
        return False


def common_letters(string_one, string_two):
    common = []
    for l in string_one:
        if l in string_two and l not in common:
            common.append(l)
    return common
# ====================================================================================


def username_generator(f_n, l_n):
    return f_n[:3]+l_n[:4]


def password_generator(username):
    return username[-1] + username[:-1]


# ====================================================================================
poem_title = "spring storm"
poem_author = "William Carlos Williams"

poem_title_fixed = poem_title.title()
print(poem_title + " " + poem_title_fixed)
poem_author_fixed = poem_author.upper()
print(poem_author + " " + poem_author_fixed)
# ====================================================================================
line_one = "The sky has given over"
line_one_words = line_one.split()

# ====================================================================================
authors = "Audre Lorde, William Carlos Williams, Gabriela Mistral, Jean Toomer, An Qi, Walt Whitman, Shel Silverstein, Carmen Boullosa, Kamala Suraiyya, Langston Hughes, Adrienne Rich, Nikki Giovanni"

author_names = authors.split(',')
author_last_names = []
for name in author_names:
    the_name = name.split()
    author_last_names.append(the_name[-1])

print(author_last_names)
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
# ====================================================================================
