exports.seed = async function (knex) {
  await knex("webinars").del();

  await knex("webinars").insert([
    {
      id: 1,
      date: "February 28, 2024",
      time: "10:00 AM EST",
      title: "Introduction to Project-Based Learning",
      description:
        "Learn the fundamentals of project-based learning and how to implement it effectively in your classroom.",
      guestSpeaker: "Dr. Michael Johnson",
      zoomLink: "https://zoom.us/example1",
    },
    {
      id: 2,
      date: "March 5, 2024",
      time: "12:00 PM EST",
      title: "Effective Classroom Management Strategies",
      description:
        "Discover practical strategies for managing your classroom environment to enhance student learning and engagement.",
      guestSpeaker: "Prof. Sarah Adams",
      zoomLink: "https://zoom.us/example2",
    },
    {
      id: 3,
      date: "March 12, 2024",
      time: "11:30 AM EST",
      title: "Engaging Students with Interactive Lectures",
      description:
        "Learn how to make your lectures come alive and captivate students with interactive engagement strategies",
      guestSpeaker: "Dr. David Martinez",
      zoomLink: "https://zoom.us/example3",
    },
    {
      id: 4,
      date: "March 19, 2024",
      time: "10:00 AM EST",
      title: "Innovative Assessment Techniques",
      description:
        "Explore groundbreaking assessment techniques to enhance student learning and foster deeper understanding. Uncover creative approaches, tools, and methodologies to effectively measure student progress and drive academic excellence.",
      guestSpeaker: "Dr. Emily White",
      zoomLink: "https://zoom.us/example4",
    },
    {
      id: 5,
      date: "March 26, 2024",
      time: "1:00 PM EST",
      title: "Promoting Critical Thinking in the Classroom",
      description:
        "Foster critical thinking in your classroom with practical strategies.  Elevate student engagement and empower independent thought.",
      guestSpeaker: "Dr. Mark Wilson",
      zoomLink: "https://zoom.us/example5",
    },
    {
      id: 6,
      date: "April 2, 2024",
      time: "8:00 PM EST",
      title: "Effective Use of Technology in Education",
      description:
        "Learn how to seamlessly integrate tech tools into your teaching practices to enhance student engagement, collaboration, and learning outcomes. Gain practical insights and strategies to harness technology's power for more effective and dynamic educational experiences.",
      guestSpeaker: "Prof. Jennifer Brown",
      zoomLink: "https://zoom.us/example6",
    },
    {
      id: 7,
      date: "April 9, 2024",
      time: "10:45 AM EST",
      title: "Differentiated Instruction Strategies",
      description:
        "Uncover methods to cater to diverse learning needs, empower every student, and foster a supportive environment where individual growth flourishes.",
      guestSpeaker: "Dr. Christopher Clark",
      zoomLink: "https://zoom.us/example7",
    },
    {
      id: 8,
      date: "April 16, 2024",
      time: "10:00 AM EST",
      title: "Culturally Responsive Teaching Practices",
      description:
        "Explore strategies to honor diverse backgrounds, foster inclusivity, and create enriching learning environments where every student feels valued and empowered to succeed.",
      guestSpeaker: "Prof. Maria Rodriguez",
      zoomLink: "https://zoom.us/example8",
    },
    {
      id: 9,
      date: "April 23, 2024",
      time: "2:15 PM EST",
      title: "Fostering Creativity in the Classroom",
      description:
        "Unleash innovative teaching techniques to nurture imagination, inspire curiosity, and cultivate a culture of creativity among students, empowering them to thrive in an ever-changing world.",
      guestSpeaker: "Dr. James Lee",
      zoomLink: "https://zoom.us/example9",
    },
  ]);
};
