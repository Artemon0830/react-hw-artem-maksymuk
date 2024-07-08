import joi from 'joi'

const postValidator = joi.object({
    title: joi.string().min(3).max(15).required().messages({
        'string.min':'title must be at least 3 characters long',
        'string.max':'title must be at most 15 characters long'
    }),
    body: joi.string().min(3).max(15).required().messages({
        'string.min':'body must be at least 3 characters long',
        'string.max':'body must be at most 15 characters long'
    }),
    userId: joi.number().min(1).max(10).required().messages({
        'number.min':'body must be at least 1 characters long',
        'number.max':'body must be at most 10 characters long'
    })
})
export {postValidator}