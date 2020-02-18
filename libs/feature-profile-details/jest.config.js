module.exports = {
  name: 'feature-profile-details',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-profile-details',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
