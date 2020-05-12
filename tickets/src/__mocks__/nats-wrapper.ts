export const natsWrapper = {
  client: {
    // これは難しいな :thinking_face:
    publish: jest
      .fn()
      .mockImplementation(
        (subject: string, data: string, callback: () => void) => {
          callback();
        }
      ),
  },
};
