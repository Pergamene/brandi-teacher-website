import PostsService from '../services/Posts';

class Posts {
  static async getAllAnnouncements() {
    const announcements = [];
    const announcementsData = await PostsService.getAllAnnouncements();
    announcementsData.forEach(doc => {
      const { content } = doc.data();
      announcements.push(JSON.parse(content));
    });
    return announcements;
  }
}

export default Posts;
