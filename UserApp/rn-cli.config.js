module.exports = {
  getHasteName(filePath) {
    const rootDir = '<rootDir>';
    if (filePath.startsWith(rootDir + '/amplify/backend/function/userappee848e79ee848e79PostAuthentication/src')) {
      return 'userappee848e79ee848e79PostAuthentication_backend';
    }
    if (filePath.startsWith(rootDir + '/amplify/#current-cloud-backend/function/userappee848e79ee848e79PostAuthentication/src')) {
      return 'userappee848e79ee848e79PostAuthentication_current';
    }
    return null;
  },
};
