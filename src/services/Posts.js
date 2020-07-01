import { db } from '../assets/firebase';

class Posts {
  static async getAllAnnouncements() {
    const announcements = await db.collectionGroup('announcements').get();
    return announcements;
  }
}

export default Posts;
