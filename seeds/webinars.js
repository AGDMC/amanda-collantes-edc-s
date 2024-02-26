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
        "Discover practical strategies for managing your classroom environment to enhance student learning and engagement.",
      guestSpeaker: "Dr. David Martinez",
      zoomLink: "https://zoom.us/example3",
    },
    {
      id: 4,
      date: "March 19, 2024",
      time: "10:00 AM EST",
      title: "Innovative Assessment Techniques",
      description:
        "Discover practical strategies for managing your classroom environment to enhance student learning and engagement.",
      guestSpeaker: "Dr. Emily White",
      zoomLink: "https://zoom.us/example4",
    },
    {
      id: 5,
      date: "March 26, 2024",
      time: "1:00 PM EST",
      title: "Promoting Critical Thinking in the Classroom",
      description:
        "Discover practical strategies for managing your classroom environment to enhance student learning and engagement.",
      guestSpeaker: "Dr. Mark Wilson",
      zoomLink: "https://zoom.us/example5",
    },
    {
      id: 6,
      date: "April 2, 2024",
      time: "8:00 PM EST",
      title: "Effective Use of Technology in Education",
      description:
        "Discover practical strategies for managing your classroom environment to enhance student learning and engagement.",
      guestSpeaker: "Prof. Jennifer Brown",
      zoomLink: "https://zoom.us/example6",
    },
    {
      id: 7,
      date: "April 9, 2024",
      time: "10:45 AM EST",
      title: "Differentiated Instruction Strategies",
      description:
        "Discover practical strategies for managing your classroom environment to enhance student learning and engagement.",
      guestSpeaker: "Dr. Christopher Clark",
      zoomLink: "https://zoom.us/example7",
    },
    {
      id: 8,
      date: "April 16, 2024",
      time: "10:00 AM EST",
      title: "Culturally Responsive Teaching Practices",
      description:
        "Discover practical strategies for managing your classroom environment to enhance student learning and engagement.",
      guestSpeaker: "Prof. Maria Rodriguez",
      zoomLink: "https://zoom.us/example8",
    },
    {
      id: 9,
      date: "April 23, 2024",
      time: "2:15 PM EST",
      title: "Fostering Creativity in the Classroom",
      description:
        "Discover practical strategies for managing your classroom environment to enhance student learning and engagement.",
      guestSpeaker: "Dr. James Lee",
      zoomLink: "https://zoom.us/example9",
    },
  ]);
};
