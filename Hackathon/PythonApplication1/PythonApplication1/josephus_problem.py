import sys
import logging

"""
    This program accepts number_of_persons as command line input and finds which person will be left alive.

    number_of_persons: Command line input.
                       Value shoud be greater than 0.
"""

def find_person_alive(n):
	"""
	    n: Number of persons.
	    people: list of persons from 1 to n.
	    kill_order: list of persons in the order they are killed.
	    i: temporary iteration variable

	    This function creates a list of people (from 1 to n) and iterates through that list to pop the alternate elements 
	    and add them in kill_order.
	"""
	people, i, kill_order = list(range(1,n+1)), 0, []
	while people:
		i = (i+1) % len(people)                                                                   # Getting location of 'i' in 'people'.
		kill_order.append(people.pop(i))
	return kill_order[-1]                                                                         # The last person in the kill_order ia alive.


#def main():
#	try:
#		logging.basicConfig(filename='josephus_problem.log', filemode='w', 
#							level=logging.DEBUG, format='%(asctime)s %(message)s',                # Logging program events.
#							datefmt='%m/%d/%Y %I:%M:%S %p')                              

#		logging.info('Execution Begin')
		
#		number_of_persons = int(sys.argv[1])                                                      # Accepting command line input

#		logging.info('Number of Persons: %i' % number_of_persons)

#		if number_of_persons<1:																	  # When negative number is provided as input.
#			raise ValueError

#	except IndexError as e:                                                                       # When no input is provided.
#		logging.error(e)
#		print("Please provide some input.")

#	except ValueError as e:                                                                       # When string/negative number is provided.
#		logging.error(e)
#		print("Not a valid number. Try again...")

#	except Exception as e:
#		logging.error(e)
#		print("Sorry, There was a problem please try again.")

#	else:
#		person_alive = find_person_alive(number_of_persons)
#		logging.info('Person alive: %i' % person_alive)
#		print("Person Alive: %i" % person_alive)

#	finally:
#		logging.info('Done')
		

#if __name__ == "__main__":
#	main()
