export default function linkResolver(doc: any) {

  if (!doc) {
    return '/';
  }

  if (doc.type) {
    switch (doc.type) {
      case 'home':
        return '/';
      case 'about':
        return '/about';

      default:
        if (doc.uid) {
          return `/${doc.uid}`;
        }

        return `/${doc.type}`;
    }
  }

  if (doc.url) {
    return doc.url;
  }

  return '/';
}