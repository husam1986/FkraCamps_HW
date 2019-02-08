import unittest
import josephus_problem

class TestJosephusProblem(unittest.TestCase):

    def test_find_person_alive(self):
        print(josephus_problem.find_person_alive(8));
        print(josephus_problem.find_person_alive(12442));
        print(josephus_problem.find_person_alive(2847));
		#self.assertEqual(josephus_problem.find_person_alive(100),73)
		#self.assertEqual(josephus_problem.find_person_alive(41),19)
		#self.assertEqual(josephus_problem.find_person_alive(10),5)


if __name__ == '__main__':
	unittest.main()