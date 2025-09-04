import Note from "../models/Notes.js"

export async function getAllNotes(req,res){
    try{
        const notes = await Note.find()
        res.status(200).json(notes)
    } catch(error){
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message: "Internal server Error"});
    }
}

export async function createNote(req,res){
    try {
        const {title,content} = req.body
        const newNote = new Note({title, content})
        await newNote.save()
        res.status(201).json({message:"Note created succesfully"})
    } catch (error){
        console.error("Error in createNotes controller", error);
        res.status(500).json({message: "Internal server Error"});
    }
}

export async function updateNote(req,res){
    try{
        const {title,content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},
            {
                new: true,
            }
        )
        if (!updateNote) return res.status(404).json({message:"Note not found"})
        res.status(200).json({message: "Note updated successfully"})
    } catch( error ){
        console.error("Error in updateNotes controller", error);
        res.status(500).json({message: "Internal server Error"});
    }
}

export function deleteNote(req,res){
    res.status(200).json({message : "post updated successfully!"});
}
