export default {
    name: 'blogschema',
    title: 'blogschema',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block'
              },
              {
                type: 'image',
                fields: [
                  {
                    type: 'text',
                    name: 'alt',
                    title: 'Alternative text',
                    description: `Some of your visitors cannot see images, 
                      be they blind, color-blind, low-sighted; 
                      alternative text is of great help for those 
                      people that can rely on it to have a good idea of 
                      what\'s on your page.`,
                    options: {
                      isHighlighted: true
                    }
                  }
                ]
              }
            ]
          },{
            title: 'created At',
            name: 'createdAt',
            type: 'datetime',
            options: {
              dateFormat: 'DD-MM-YYYY',
              timeFormat: 'HH:mm:ss',
              timeStep: 5,
              calendarTodayLabel: 'Today'
            }
          }
    ],
}